<?php
/*
Autor/en: Nick Weyermann
Version:  1.01
Datum:    26.11.18
*/

include("db_connect.php");

/* Selektiert Bild nach Kriterien der vorherigen Bilder und zeigt diese an */
$sql = "SELECT COUNT(*) FROM bilder";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);

$numbers = array();

for ($i = 1; $i <= $row[0]; $i++) {
    $numbers[$i-1] = $i;
}

if (isset($_POST["bild1"])) {
    $key = array_search($_POST["bild1"], $numbers);
    array_splice($numbers, $key, 1);
}
if (isset($_POST["bild2"])) {
    $key = array_search($_POST["bild2"], $numbers);
    array_splice($numbers, $key, 1);
}
if (isset($_POST["bild3"])) {
    $key = array_search($_POST["bild3"], $numbers);
    array_splice($numbers, $key, 1);
}

shuffle($numbers);
$sql = "SELECT bildID, name, datei, typ FROM bilder WHERE bildID = $numbers[0];";

$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result);

$imgID = $row["bildID"];
$imgName = $row["name"];
$imgType = $row["typ"];
$imgData = $row["datei"];

header("content-type: $imgType");
$content = $imgID.";".$imgName.";".$imgType.";".base64_encode($imgData).";";
header("content-length: ".strlen($content));
echo $content;
?>
