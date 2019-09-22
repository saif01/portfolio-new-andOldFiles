<?php

 // require 'mail/PHPMailerAutoload.php';
 include('frommail.php');
 include('mail/class.phpmailer.php');
 include('mail/class.smtp.php');

 function send_mail($sub,$msg,$to){
  
        $mail = new PHPMailer();
        $mail->isSMTP();                                      // Set mailer to use 
        $mail->Host = 'developer-syful.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP 
        $mail->Username =FROM_MAIL;                 // SMTP username
        $mail->Password =PASS;                           // SMTP password
       // $mail->SMTPSecure = 'tls';                            // Enable TLS 
        $mail->Port = 465;                                    // TCP port to connect 
        $mail->setFrom('mail@developer-syful.com', 'Test Mail');
        $mail->addAddress($to);    
        //$mail->addAttachment($_FILES['sendFile']['tmp_name'], $_FILES['sendFile']['name']);        
        $mail->isHTML(true);                                 
        $mail->Subject = $sub;
        $mail->Body    = $msg;
        $mail->send();

        if ($mail) {
            echo "Mail Send";
        }else{
            echo "Mail Not send";
        }

 }



?>