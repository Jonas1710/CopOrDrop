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

/*$data = "";
$data_length = 0;

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $imgName = $row["name"];
        $imgType = $row["typ"];
        $imgData = $row["datei"];
        
        $data_length += strlen(base64_encode($imgData));
        //$data .= $imgType.";".base64_encode($imgData).";";
        $data .= base64_encode($imgData).";";
    }
} else {
    echo "0 results";
}
header("content-type: $imgType");
header("content-length: $data_length");
echo $data;*/
?>
