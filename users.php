<?php
//Connect to a database
$conn = mysqli_connect('127.0.0.1', 'root', '', 'ajax_example','3306');


$query = "SELECT * FROM users";

//get results
$result = mysqli_query($conn, $query);

//fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);