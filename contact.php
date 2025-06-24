<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contactmarkslaiw@gmail.com";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $subject = "New Contact Message from $name";
    $body = "From: $name\nEmail: $email\n\nMessage:\n$message";

    
    if (mail($to, $subject, $body)) {
        echo "<h2 style='color: white; background: green; padding: 20px;'>Message sent successfully!</h2>";
    } else {
        echo "<h2 style='color: white; background: red; padding: 20px;'>Message failed to send. Try again later.</h2>";
    }
}
?>
