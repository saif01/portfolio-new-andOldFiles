<?php 
include('mail/sendmail.php');


?>
<!--*********start Sweet alert For Submiting data **********-->
<script src="swwetalert/jslib.js"></script>
<script src="swwetalert/dev.js"></script>
<link rel="stylesheet" type="text/css" href="swwetalert/sweetalert.css">
<!--*********end Sweet alert For Submiting data **********-->
<?php

if (isset($_POST['sendmail'])) {

$to="syful.cse.bd@gmail.com";
$email=$_POST['email'];
$name=$_POST['name'];
$message=$_POST['message'];

$sub="Syful's Profile Viewer";
$msg="
		<html>
        	<body>
	            <font size='5' color='green'>Visitors Name: $name.</font><br><br><hr>

	            <font size='4' color='blue'>Visitors E-mail: $email. </font><br>
	            <font size='4' color='#307221'>Visitors Message : $message </b></font><br>
	            
	            
	             <hr>
          
            </body>
        </html> 

";

    send_mail($sub,$msg,$to);


    
		?>		
		<script>
		setTimeout(function () { 
		        swal({
		          title: "Successfully",
		          text: "You Send E-Mail !!!",
		          type: "success",
		          confirmButtonText: "OK"
		        },
		        function(isConfirm){
		          if (isConfirm) {
		          	history.back();
		            
		          }
		        }); },0);

		</script>

	    <?php
				
}



?>