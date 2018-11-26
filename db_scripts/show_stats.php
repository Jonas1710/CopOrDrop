<?php
include("db_connect.php");

$sql = "SELECT name, aufrufe, likes, ROUND(likes / aufrufe * 100, 2) AS quote FROM bilder";
if (isset($_POST["row"])) {
    $sql .= " ORDER BY ".$_POST["row"].";";
} else {
    $sql .= ";";
}

$result = mysqli_query($conn, $sql);

$stats = "";
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $stats .= "<tr>";
        $stats .= "<td data='Bild'>".$row["name"]."</td>\n";
        $stats .= "<td data='Aufrufe'>".$row["aufrufe"]."</td>\n";
        $stats .= "<td data='Likes'>".$row["likes"]."</td>\n";
        if ($row["quote"] == null) {
            $stats .= "<td data='Quote'>0.00%</td>\n";
        } else {
            $stats .= "<td data='Quote'>".$row["quote"]."%</td>\n";
        }
        $stats .= "</tr>";
    }
} else {
}
echo $stats;
?>