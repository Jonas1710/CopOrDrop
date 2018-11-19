<?php
include("db_connect.php");

$sql = "SELECT name, aufrufe, likes FROM bilder;";

$result = mysqli_query($conn, $sql);

$stats = "";
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $stats .= "<tr>";
        $stats .= "<td>".$row["name"]."</td>\n";
        $stats .= "<td>".$row["aufrufe"]."</td>\n";
        $stats .= "<td>".$row["likes"]."</td>\n";
        $percentage = $row["likes"] / $row["aufrufe"] * 100;
        $stats .= "<td>".round($percentage, 2)."%</td>\n";
        $stats .= "</tr>";
    }
} else {
}
echo $stats;
?>