<?php
include("db_connect.php");

$sql = "SELECT * FROM bilder;";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $bildID = $row["bildID"];
        $sql = "UPDATE bilder SET aufrufe = 0, likes = 0 WHERE bildID = $bildID;";
        mysqli_query($conn, $sql);
    }
} else {
}
?>