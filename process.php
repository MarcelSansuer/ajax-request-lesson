<?php
//Connect to a database
$conn = mysqli_connect('127.0.0.1', 'root', '', 'ajax_example','3306');


echo 'Processing ...';

//check for GET variable
if(isset($_GET['name'])){
    //echo 'GET: your name is '.$_GET['name'];
}

//check for POST variables
if(isset($_POST['name'])){
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    //echo 'POST: your name is '.$_POST['name'];

    $query = "INSERT INTO users(name) VALUES('$name')";
    if(mysqli_query($conn, $query)){
        echo 'USER added';
    }else{
        echo 'ERROR: '. mysqli_error($conn);
    }
}