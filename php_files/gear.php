<?php
require_once("connect_database.php");

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow your React app
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type"); // Specify allowed headers

try {
    // Disable error reporting to prevent unwanted output
    ini_set('display_errors', 0);
    error_reporting(0);

    // Select all gear items from the database
    $query = 'SELECT * FROM gear';
    $statement = $db->prepare($query);
    $statement->execute();

    // Fetch all gear as an associative array
    $gearItems = $statement->fetchAll(PDO::FETCH_ASSOC);

    // Set the Content-Type to application/json to ensure proper JSON response
    header('Content-Type: application/json');

    // Return the data as a JSON response
    echo json_encode($gearItems);

} catch (PDOException $e) {
    // Return error as JSON
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
