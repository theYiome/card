<?php
    if(isset($_POST['subject']) and isset($_POST['message']) and isset($_POST['email'])){
        $to = "kamil.pasterczyk@gmail.com";
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $headers = $_POST['email'];
        mail($to, $subject, $message, $headers);
        echo "SUCCESS";
    } else echo "ERROR 0"; 
?>