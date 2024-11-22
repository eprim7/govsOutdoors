<?php

require_once("connect_database.php");

header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow your React app
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type"); // Specify allowed headers

try {
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);

    if ($data) {
        $gearId = $data['gear_id'];
        $username = $data['username'];
        $rentDate = date('Y-m-d');
        $price = $data['price'];

        // Prepare the SQL statement
        $sql = "INSERT INTO rentals2 (gear_id, username, rent_date, price) 
                VALUES (:gear_id, :username, :rent_date, :price)";
        $stmt = $db->prepare($sql);

        // Bind parameters
        $stmt->bindParam(':gear_id', $gearId);
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':rent_date', $rentDate);
        $stmt->bindParam(':price', $price);

        // Execute the query
        $stmt->execute();

        // Return a success message
        echo json_encode(['status' => 'success', 'message' => 'Rental successfully recorded in rentals2!']);
    } else {
        // Handle invalid data
        echo json_encode(['status' => 'error', 'message' => 'Invalid data received']);
    }
} catch (PDOException $e) {
    // Catch any errors and display them
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
