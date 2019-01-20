<?php
/*
Autor/en: Jonas Mollet
Version:  1.02
Datum:    19.11.18
*/

include("db_connect.php");

/* Passt Bilder Werte an nach Bild1 */
$bildID1 = intval($_POST["bildID1"]);
$bildID2 = intval($_POST["bildID2"]);
$sql = "UPDATE bilder SET aufrufe = aufrufe + 1 WHERE bildID = $bildID1;";
$sql .= "UPDATE bilder SET aufrufe = aufrufe + 1 WHERE bildID = $bildID2;";
$sql .= "UPDATE bilder SET likes = likes + 1 WHERE bildID = $bildID1;";

mysqli_multi_query($conn, $sql);
?>