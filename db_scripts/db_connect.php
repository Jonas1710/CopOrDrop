<?php
/*
Autor/en: Nikola Milicic
Version:  1.02
Datum:    19.11.18
*/

/* Stellt Verbindung zur Datenbank her */
$conn = mysqli_connect("localhost", "root", "", "CopOrDrop");
if (!$conn) {
    die("Keine Verbindung: " . mysqli_connect_error());
}
?>