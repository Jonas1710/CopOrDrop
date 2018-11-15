$.post("db_scripts/show_stats.php", function (data) {
    $("#stat_elements").html(data);
});