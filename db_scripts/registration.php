<?php
include("db_connect.php");

/* Überprüft ob Benutzername vergeben ist und macht einen neuen Eintrag in Benutzer */
$username = $_POST["username"];
$password = $_POST["password"];
$sql = "SELECT name FROM benutzer WHERE name = '$username';";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "false;Benutzername bereits vergeben";
} else {
    $sql = "INSERT INTO benutzer (name, password)
VALUES ('$username', '$password');";
    
    if (mysqli_query($conn, $sql)) {
        echo "true;Erfolgreich registriert";
    } else {
    }
}
?>