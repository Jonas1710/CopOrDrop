<?php
$conn = mysqli_connect("localhost", "root", "", "CopOrDrop");
if (!$conn) {
    die("Keine Verbindung: " . mysqli_connect_error());
}
?>