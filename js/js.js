var win = window.matchMedia("(max-width: 480px)");
var small = false;

/* burger menu */
$("#burger").click(function () {
    $("#burger").toggleClass("clicked");
    $("#menu").slideToggle(300);
});
if (win.matches) {
    small = true;
    $("#burger").removeClass("clicked");
    $("#menu").hide();
} else {
    small = false;
    $("#burger").removeClass("clicked");
    $("#menu").show();
}
$(window).on("resize", function () {
    if (win.matches) {
        if (small === false) {
            small = true;
            $("#burger").removeClass("clicked");
            $("#menu").hide();
        }
    } else {
        small = false;
        $("#burger").removeClass("clicked");
        $("#menu").show();
    }
});
