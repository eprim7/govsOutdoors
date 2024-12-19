<?php
require_once("connect_database.php");

// Add CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow your React app
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type"); // Specify allowed headers

try {
    ini_set('display_errors', 0);
    error_reporting(0);

    $query = 'SELECT * FROM gear2';
    $statement = $db->prepare($query);
    $statement->execute();

    $gearItems = $statement->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');

    echo json_encode($gearItems);

} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
