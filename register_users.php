<?php
require_once("connect_database.php");

try {
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
        // Return only the JSON response
        echo json_encode(['status' => 'success', 'message' => 'User registered successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to register user']);
    }

} catch (PDOException $e) {
    // Check if the error is a duplicate entry error
    if ($e->getCode() === '23000') { // SQLSTATE code for integrity constraint violation
        echo json_encode(['status' => 'error', 'message' => 'Username already exists']);
    } else {
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
    }
}
?>
