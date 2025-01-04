<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $vorname = htmlspecialchars($_POST['vorname']);
    $firma = htmlspecialchars($_POST['firma']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "stefanodt944@outlook.com";
    $subject = "Neue Nachricht vom Website";
    $body = "Name: $name\nVorname: $vorname\nFirma: $firma\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet!";
    } else {
        echo "Nachricht konnte nicht gesendet werden.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>
