<?php
$conn = mysqli_connect("localhost", "root", "", "CopOrDrop");
if (!$conn) {
    die("Keine Verbindung zu: " . msqli_error($conn));
}
?>