<?php
require_once("connect_database.php");

header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow your React app
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Specify allowed methods
header("Access-Control-Allow-Headers: Content-Type"); // Specify allowed headers

// Retrieve username from POST request
$data = json_decode(file_get_contents("php://input"), true);
$username = $data['userEmail'] ?? '';

// Check if username is provided
if (empty($username)) {
    echo json_encode(["error" => "No username provided."]);
    exit;
}

try {
    // Prepare and execute query with JOIN
    $query = "
    SELECT 
        gear2.name AS gear_name,
        rentals2.rent_date
    FROM 
        rentals2
    INNER JOIN 
        gear2 
    ON 
        rentals2.gear_id = gear2.gear_id
    WHERE 
        rentals2.username = :username
";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->execute();

    // Fetch results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
