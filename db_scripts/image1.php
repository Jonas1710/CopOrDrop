<?php
/*include("db_connect.php");

mysqli_select_db($conn, "bilder");

$bildID1 = intval($_POST["bildID1"]);
$bildID2 = intval($_POST["bildID2"]);
$sql = "UPDATE bilder SET aufrufe = aufrufe + 1 WHERE bildID = $bildID1;";
$sql += "UPDATE bilder SET aufrufe = aufrufe + 1 WHERE bildID = $bildID2;";
$sql += "UPDATE bilder SET likes = aufrufe + 1 WHERE bildID = $bildID1;";

mysqli_query($conn, $sql);*/
$bildID1 = intval($_POST["bildID1"]);
$bildID2 = intval($_POST["bildID2"]);
echo "Bild 1: $bildID1, Bild 2: $bildID2";
?>