if (sessionStorage.getItem("session")) {
    $("#logout").show();
    $("#registration").hide();
    $("#login").hide();
} else {
    $("#logout").hide();
    $("#registration").show();
    $("#login").show();
}

/* win->Fenstergrösse, small-> */
var win = window.matchMedia("(max-width: 480px)"),
    small = false;

/* Burger Klick zeigt Navigation an */
$("#burger").click(function () {
    $("#burger").toggleClass("clicked");
    $("#menu").slideToggle(300);
});

/* Zeigt Burger an wenn Grösse stimmt */
if (win.matches) {
    small = true;
    $("#burger").removeClass("clicked");
    $("#menu").hide();
} else {
    small = false;
    $("#burger").removeClass("clicked");
    $("#menu").show();
}

/* Bei Anpassung der Fenstergrösse wird Webseite angepasst */
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
