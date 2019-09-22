<?php




if(isset($_POST["contact_name"]))
{

    $contact_email=$_POST['contact_email'];
    $contact_name=$_POST['contact_name'];
    $contact_message=$_POST['contact_message'];
    $contact_mobile=$_POST["contact_mobile"];

  
    $to = "syful.cse.bd@gmail.com";
    $subject = "Portfolio Viewer";
    
    $message = "
    <html>
    <head>
    <title>HTML email</title>
    </head>
    <body>
    <p>This email Come From Your Portfolio Website!</p>
    <table>
    <tr>
        <th>Name</th>
        <td>".$contact_name."</td>
    </tr>
    <tr>
        <th>Phone</th>
        <td>".$contact_mobile."</td>
    </tr>
    <tr>
        <th>Message</th>
        <td>".$contact_message."</td>
    </tr>
    
    </table>
    </body>
    </html>
    ";
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= "From: ".$contact_email. "\r\n";
    // $headers .= 'Cc: myboss@example.com' . "\r\n";
    
    $mailsend= mail($to,$subject,$message,$headers);

    
    if($mailsend){
        echo "Mail Send";
    }else{
        echo "Error Generated";
    }

    

}


?>