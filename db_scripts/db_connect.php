<?php
$conn = mysqli_connect("localhost", "root", "", "CopOrDrop");
if (!$conn) {
    die("Keine Verbindung zu: " . mysqli_connect_error());
}
?>