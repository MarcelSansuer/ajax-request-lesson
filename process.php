

<?php
//Connect to a database
//TODO: create database


echo 'Processing ...';

//check for GET variable
if(isset($_GET['name'])){
    echo 'GET: your name is '.$_GET['name'];
}

//check for POST variables
if(isset($_POST['name'])){
    echo 'POST: your name is '.$_POST['name'];
}