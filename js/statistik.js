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