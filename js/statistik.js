if (sessionStorage.getItem("session")) {
    $("#btn_reset").show();
} else {
    $("#btn_reset").hide();
}

function show_stats(row) {
    $.post("db_scripts/show_stats.php", { row: row }, function (data) {
        $("#stat_elements").html(data);
    });
}

$(document).ready(show_stats(undefined));

$("#sort_name").click(function () {
    show_stats("name");
});

$("#sort_aufrufe").click(function () {
    show_stats("aufrufe");
});

$("#sort_likes").click(function () {
    show_stats("likes");
});

$("#sort_quote").click(function () {
    show_stats("quote");
});

$("#btn_reset").click(function () {
    $.post("db_scripts/reset_stats.php");
    setTimeout(function () { location.reload(); }, 500);
});