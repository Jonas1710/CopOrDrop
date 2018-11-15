<?php
include("db_connect.php");

$numbers = range(1, 5);
shuffle($numbers);

$sql = "SELECT name, datei, typ FROM bilder WHERE bildID = $numbers[0];";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);

$imgName = $row["name"];
$imgType = $row["typ"];
$imgData = $row["datei"];

header("content-type: $imgType");
$content = $imgName.";".$imgType.";".base64_encode($imgData).";";
header("content-length: ".strlen($content));
echo $content;
?>
