<?php
include("db_connect.php");

$name = $_POST["name"];
$image = $_POST["image"];
$typ = $_POST["typ"];
$sql = "SELECT name FROM bilder WHERE name = '$name';";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "false;Bildername bereits vergeben";
} else {
    $sql = "INSERT INTO bilder (name, datei, typ, aufrufe, likes, benutzerID)
VALUES ('$name', '$image', '$typ', '0', '0', '1');";
    
    if (mysqli_query($conn, $sql)) {
        echo "true;Erfolgreich hochgeladen";
    } else {
        echo "false;Fehler";
    }
}
?>
