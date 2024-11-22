<?php

require 'vendor/autoload.php'; // Include Composer's autoload file
header("Content-Type: application/json"); // Set header to JSON
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Headers: Content-Type"); // Allow specific headers

use Stripe\Stripe;
use Stripe\PaymentIntent;

// Load environment variables
if (file_exists(__DIR__ . '/.env')) {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
}

// Set the Stripe secret key
Stripe::setApiKey($_ENV['STRIPE_SECRET_KEY']);

// Read and decode the JSON input from the request
$input = json_decode(file_get_contents('php://input'), true);

// Debugging: Log the incoming data to see if the amount is correctly received

$rawInput = file_get_contents('php://input');
error_log("Raw input received: $rawInput");

// Decode JSON input
$input = json_decode($rawInput, true);

if (is_null($input)) {
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
} else {
    // Output received data for debugging
    error_log(print_r($input, true));
}

// Retrieve the amount from the POST request
$amount = $input['amount'] ?? null;

// Basic validation
if (!isset($amount) || $amount <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid amount']);
    exit;
}

try {
    // Create a PaymentIntent with the specified amount
    $paymentIntent = PaymentIntent::create([
        'amount' => $amount,
        'currency' => 'usd',
    ]);

    // Respond with the client secret for the PaymentIntent
    echo json_encode(['clientSecret' => $paymentIntent->client_secret]);
} catch (\Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to create payment intent: ' . $e->getMessage()]);
}

?>



