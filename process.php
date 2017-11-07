<?php
echo 'Processing ...';

//check for GET variable
if(isset($_GET['name'])){
    echo 'GET: your name is '.$_GET['name'];
}