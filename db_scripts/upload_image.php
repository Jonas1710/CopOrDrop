<?php
/*
Autor/en: Nikola Milicic
Version:  1.01
Datum:    26.11.18
*/

include("db_connect.php");

/* Lädt Bild mit Name hoch */
$name = $_POST["imagename"];
$image = addslashes(file_get_contents($_FILES["image"]["tmp_name"]));
$typ = $_FILES["image"]["type"];
$user = $_POST["user"];
echo $user;

/*$sql1 = "SELECT benutzerID FROM benutzer WHERE name = '$user';";

$result1 = mysqli_query($conn, $sql1);

$row = mysqli_fetch_assoc($result1);

$user = $row['benutzerID'];

$sql2 = "SELECT name FROM bilder WHERE name = '$name';";

$result2 = mysqli_query($conn, $sql2);

if (mysqli_num_rows($result2) > 0) {
    echo "false;Bildername bereits vergeben";
} else {
    $sql = "INSERT INTO bilder (name, datei, typ, aufrufe, likes, benutzerID)
VALUES ('$name', '$image', '$typ', '0', '0', '$user');";
    
    if (mysqli_query($conn, $sql)) {
        echo "true;Erfolgreich hochgeladen";
    } else {
        echo "false;Fehler";
    }
}*/
?>
