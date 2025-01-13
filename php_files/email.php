<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Enable CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Connect to the database
require_once("connect_database.php");

// Decode the JSON payload
$data = json_decode(file_get_contents('php://input'), true);

// Validate request data
if (!isset($data['userEmail']) || !isset($data['items']) || !is_array($data['items'])) {
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'Invalid request data']);
    exit;
}

$email = $data['userEmail'];
$items = implode(", ", $data['items']); // Convert array to a string

$to = $email;
$subject = "Thank you for your purchase with Gov's Outdoors";
$txt = "Thank you for purchasing $items from us. We hope you enjoy the great outdoors.";
$headers = "From: govsOutdoors@example.com" .
           "CC: somebodyelse@example.com";

// Attempt to send the email
if (mail($to, $subject, $txt, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(['error' => 'Failed to send email']);
}
