var win = window.matchMedia("(max-width: 480px)");
var small = false;

var image1 = 0;
var image2 = 0;

$("#image1").click(function () {
    image1 += 1;
    alert("Bild1 angeclickt: " + image1);
});
$("#image2").click(function () {
    image2 += 1;
    alert("Bild2 angeclickt: " + image2);
});


$("#btn_upload").click(function () {
    $("#input_file").click();
});
$("#input_file").change(function () {
    $("#selected_file").text($("#input_file")[0].files.item(0).name);
});

$("#burger").click(function () {
    $("#burger").toggleClass("clicked");
    $("#menu").slideToggle();
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