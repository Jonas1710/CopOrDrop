if (sessionStorage.getItem("session")) {
    $("#btn_reset").show();
} else {
    $("#btn_reset").hide();
}

/* Zeigt die Statistik an */
function show_stats(row) {
    $.post("db_scripts/show_stats.php", { row: row }, function (data) {
        $("#stat_elements").html(data);
    });
}
$(document).ready(show_stats(undefined));

/* Sortiert nach Name */
$("#sort_name").click(function () {
    show_stats("name");
});

/* Sortiert nach Aufrufe */
$("#sort_aufrufe").click(function () {
    show_stats("aufrufe");
});

/* Sortiert nach Likes */
$("#sort_likes").click(function () {
    show_stats("likes");
});

/* Sortiert nach Quote */
$("#sort_quote").click(function () {
    show_stats("quote");
});

/* Setzt Statistik zurück */
$("#btn_reset").click(function () {
    $.post("db_scripts/reset_stats.php");
    setTimeout(function () { location.reload(); }, 500);
});