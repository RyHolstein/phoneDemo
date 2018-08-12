<?php 


$input = $_FILES['audio']['tmp_name'];
$output = '../db/audioFiles/'.time().'.mp3';

if(move_uploaded_file($input, $output))
    exit("file successfully uploaded");

/*Display the file array if upload failed*/
exit(print_r($_FILES));


?>