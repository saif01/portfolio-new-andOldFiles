<?php
require('mail/mail/class.phpmailer.php');
require('mail/mail/class.smtp.php');

	$mail = new PHPMailer();
    $mail->isSMTP();                                      // Set mailer to use 
    $mail->Host = 'developer-syful.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP 
    $mail->Username ='mail@developer-syful.com';                 // SMTP username
    $mail->Password ='saif5683@';                           // SMTP password
    $mail->Port =587;                                    // TCP port to connect 
    $mail->setFrom('mail@developer-syful.com', 'Test Mail');
    $mail->addAddress('syful.cse.bd@gmail.com');    
    //$mail->addAttachment($_FILES['sendFile']['tmp_name'], $_FILES['sendFile']['name']);        
    $mail->isHTML(true);                                 
    $mail->Subject = "My Profile Viewer";
    $mail->Body    = "This is test mail";
    $mail->send();

    if ($mail) {
        echo "Mail Send";
    }else{
        echo "Mail Not send";
    }




?>