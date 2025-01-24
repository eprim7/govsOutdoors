<?php
require_once("connect_database.php");
require 'vendor/autoload.php';

use PHPMAILER\PHPMailer\PHPMAILER;
use PHPMailer\PHPMailer\Exception;



ini_set('display_errors', 0); // Hide errors in production
ini_set('log_errors', 1); // Log errors for debugging
error_reporting(E_ALL); // Report all errors

// Enable CORS
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$requestPayload = file_get_contents("php://input");
$data = json_decode($requestPayload, true);

$userEmail = $data['userEmail'] ?? null;
$items = $data['items'] ?? [];

if (!$userEmail || empty($items)) {
    echo json_encode(["error" => "Invalid request data"]);
    http_response_code(400); // Bad Request
    exit;
}

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Use your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'your-email@gmail.com'; // Your email
    $mail->Password = 'your-email-password'; // Your email password or app-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL encryption
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('govsOutdoors@gmail.com', "Gov's Outdoors");
    $mail->addAddress($userEmail); // User's email

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Thank you for your purchase with Gov's Outdoors";
    $mail->Body = "Thank you for purchasing the following items: ";

    foreach ($items as $item) {
        $mail->Body .= "$item";
    }

    $mail->Body .= "We hope you enjoy the great outdoors!";

    // Send email
    $mail->send();

    echo json_encode(["message" => "Email sent successfully"]);
} catch (Exception $e) {
    echo json_encode(["error" => "Failed to send email: {$mail->ErrorInfo}"]);
    http_response_code(500); // Internal Server Error
}
