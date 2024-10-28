<?php
require_once("connect_database.php");

// Allow CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

try {
    // Handle preflight request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(204);
        exit();
    }

    // Get input data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    if (!isset($data['username']) || !isset($data['password'])) {
        echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
        exit();
    }

    $username = $data['username'];
    $password = $data['password'];
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $db->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");

    // Bind parameters
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $hashedPassword);

    // Execute the statement
    if ($stmt->execute()) {
        // Successful registration
        http_response_code(200);
        echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    } else {
        // Fetch error information for debugging
        $errorInfo = $stmt->errorInfo();
        echo json_encode(['status' => 'error', 'message' => 'Failed to register user', 'details' => $errorInfo]);
    }

} catch (PDOException $e) {
    if ($e->getCode() === '23000') { // Duplicate entry error
        echo json_encode(['status' => 'error', 'message' => 'Username already exists']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
}
exit();

?>
