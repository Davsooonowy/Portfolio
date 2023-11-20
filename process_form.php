<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    if ($_POST["csrf_token"] !== $_SESSION["csrf_token"]) {
        die("CSRF token validation failed.");
    }

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill out all required fields.");
    }

    $to = "dawid.mularczyk@onet.pl";
    $headers = "From: $email";
    $mailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again later.";
    }
} else {
    header("Location: your-form-page.php");
    exit();
}
?>
