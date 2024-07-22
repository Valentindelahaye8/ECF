<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!$email) {
        echo "Invalid email format.";
        exit;
    }

    // Recipient email address
    $to = 'd888@gmx.fr'; // Replace with your email address

    // Subject
    $subject = 'New Contact Form Submission';

    // Message body
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo 'Message has been sent.';
    } else {
        echo 'Message could not be sent.';
    }
} else {
    echo "Invalid request.";
}
?>