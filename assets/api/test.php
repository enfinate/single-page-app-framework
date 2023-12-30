<?php
// Assuming your PHP file is named 'your_php_file.php'

// Access the data sent from JavaScript using $_POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the JSON payload from POST and decode it
    $jsonPayload = file_get_contents('php://input');
    $data = json_decode($jsonPayload, true); // true to get an associative array

    // Access the received data
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Process the received data (perform necessary operations)
    // For example, you can echo the received data back as JSON
    $response = [
        'code' => 200,
        'status' => 'success',
        'message' => 'Message sent successfully.',
    ];

    // Send the response back to JavaScript
    header('Content-Type: application/json');
    echo json_encode($response);
} else {
    // Handle the case where the request method is not POST
    echo 'Invalid request method.';
}