<?php
require_once("connect_database.php");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

try {
    // Get the input data
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Check for username and password
    if (!isset($data['username']) || !isset($data['password'])) {
        echo json_encode(['status' => 'error', 'message' => 'Username and password are required']);
        exit();
    }

    $username = $data['username'];
    $password = $data['password'];

    // Prepare the SQL statement to prevent SQL injection
    $stmt = $db->prepare("SELECT password FROM users WHERE username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();

    // Fetch the user record
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    

    // Check if the user exists
    if ($user && password_verify($password, hash: $user['password'])) {
        echo json_encode(['status' => 'success', 'message' => 'Login successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
    }
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
