<?php
/*
Autor/en: Micha Dubach
Version:  1.02
Datum:    4.12.18
*/

include("db_connect.php");

/* Überprüft Logindaten */
$username = $_POST["username"];
$password = md5($_POST["password"]);
$sql = "SELECT name, password FROM benutzer WHERE name = '$username' AND password = '$password';";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    echo "true;$username";
} else {
    echo "false;Benutzername oder Passwort falsch";
}
?>