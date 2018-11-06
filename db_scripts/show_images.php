<?php
include("db_connect.php");

$sql = "SELECT * FROM bilder;";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_row($result);

header('Content-length: 400M');
header('Content-type: image/jfif'); 
echo $row[2];
?>