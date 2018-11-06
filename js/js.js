var win = window.matchMedia("(max-width: 480px)");
var small = false;

var image1 = 0;
var image2 = 0;
var image;


    
$.post("db_scripts/show_images.php", function (data) {
    image = data;
});
$("#image1").attr("src", image);
/* image functions */
$("#image1").click(function () {
    image1 += 1;
    
    $.post("db_scripts/image1.php", { bildID1: image1, bildID2: image2 }, function (data) {
        console.log(data);
    });
});
$("#image2").click(function () {
    image2 += 1;
    
    $.post("db_scripts/image2.php", { bildID1: image1, bildID2: image2 }, function (data) {
        console.log(data);
    });
});

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

/* image upload form */
$("#btn_open_upload").click(function () {
    $("#background").fadeIn(300);
    $("#upload_dialog").fadeIn(300);
});
$("#btn_close").click(function () {
    $("#background").fadeOut(300);
    $("#upload_dialog").fadeOut(300);
});
$("#background").click(function () {
    $("#background").fadeOut(300);
    $("#upload_dialog").fadeOut(300);
});
$("#btn_select").click(function () {
    $("#input_file").click();
});
$("#input_file").change(function () {
    $("#selected_file").text($("#input_file")[0].files.item(0).name);
});

$("#input_password").keypress(function () {
    if ($("#input_password").val().match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
        console.log("nice");
    }
});
