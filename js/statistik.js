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

var sort = "";

/* Sortiert nach Name */
$("#sort_name").click(function () {
    if (sort == "" || sort != "name") {
        sort = "name";
    } else {
        sort = "name DESC"
    }
    show_stats(sort);
});

/* Sortiert nach Aufrufe */
$("#sort_aufrufe").click(function () {
    if (sort == "" || sort != "aufrufe") {
        sort = "aufrufe";
    } else {
        sort = "aufrufe DESC"
    }
    show_stats(sort);
});

/* Sortiert nach Likes */
$("#sort_likes").click(function () {
    if (sort == "" || sort != "likes") {
        sort = "likes";
    } else {
        sort = "likes DESC"
    }
    show_stats(sort);
});

/* Sortiert nach Quote */
$("#sort_quote").click(function () {
    if (sort == "" || sort != "quote") {
        sort = "quote";
    } else {
        sort = "quote DESC"
    }
    show_stats(sort);
});

/* Setzt Statistik zurück */
$("#btn_reset").click(function () {
    $.post("db_scripts/reset_stats.php");
    setTimeout(function () { location.reload(); }, 500);
});