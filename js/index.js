var image1 = 0;
var image2 = 0;
var image;

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
$.post("db_scripts/show_image1.php", function (data) {
    var datas = data.split(";");
    $("#image_name1").text(datas[0]);
    $("#image1").attr("src", "data:" + datas[1] + ";base64," + datas[2]);
});
$.post("db_scripts/show_image2.php", function (data) {
    var datas = data.split(";");
    $("#image_name2").text(datas[0]);
    $("#image2").attr("src", "data:" + datas[1] + ";base64," + datas[2]);
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
