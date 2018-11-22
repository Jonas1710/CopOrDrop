/* show images */
var bild1;
$.post("db_scripts/show_image.php", function (data) {
    var datas = data.split(";");
    bild1 = datas[0];
    $("#image1").attr("alt", datas[0]);
    $("#image_name1").text(datas[1]);
    $("#image1").attr("src", "data:" + datas[2] + ";base64," + datas[3]);
    $.post("db_scripts/show_image.php", { bild1: bild1 }, function (data) {
        var datas = data.split(";");
        $("#image2").attr("alt", datas[0]);
        $("#image_name2").text(datas[1]);
        $("#image2").attr("src", "data:" + datas[2] + ";base64," + datas[3]);
    });
});

/* image click functions */
$("#image1").click(function () {
    var bildID1 = $("#image1").attr("alt"),
        bildID2 = $("#image2").attr("alt");
    
    $.post("db_scripts/image1.php", { bildID1: bildID1, bildID2: bildID2 });
});
$("#image2").click(function () {
    var bildID1 = $("#image1").attr("alt"),
        bildID2 = $("#image2").attr("alt");
    
    $.post("db_scripts/image2.php", { bildID1: bildID1, bildID2: bildID2 });
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

var _URL = window.URL || window.webkitURL;
$("#input_file").change(function () {
    $("#selected_file").text($("#input_file")[0].files.item(0).name);
    var  img,
        image = this.files[0];
    if ((image)) {
        var img = new Image(),
            msg = "";
        img.onload = function () {
            var width = img.naturalWidth,
                height = img.naturalHeight;
            if (width > 800 || height > 800) {
                msg = "<p>Bild zu gross</p>";
            } else if (width < 300 || height < 300) {
                msg = "<p>Bild zu klein</p>";
            }
            if (msg === "") {
                var name = $("#input_imagename").val(),
                    typ = image.type;
                $.post("db_scripts/upload_image.php", { name: name, image: image, typ: typ }, function (data) {
                    var datas = data.split(";");
                    if (datas[0] === "true") {
                        $("#error").hide();

                        $("#success").show();
                        $("#success").html(datas[1]);
                    } else {
                        $("#error").show();
                        $("#error").html(datas[1]);

                        $("#success").hide();
                    }
                });
                
                img.src = _URL.createObjectURL(image);
            } else {
                $("#error").show();
                $("#error").html(msg);
                
                $("#success").hide();
            }
        };
        img.onerror = function () {
            console.log("not a valid file: " + image.type);
        };
    }
});
$("#btn_upload").click(function () {
    var  img,
        image = $("#input_file")[0].files[0];
    if ((image)) {
        var img = new Image(),
            msg = "";
        img.onload = function () {
            var width = img.naturalWidth,
                height = img.naturalHeight;
            if (width > 800 || height > 800) {
                msg = "<p>Bild zu gross</p>";
            } else if (width < 300 || height < 300) {
                msg = "<p>Bild zu klein</p>";
            }
            if (msg === "") {
                var name = $("#input_imagename").val(),
                    typ = image.type;
                $.post("db_scripts/upload_image.php", { name: name, image: image, typ: typ }, function (data) {
                    var datas = data.split(";");
                    if (datas[0] === "true") {
                        $("#error").hide();

                        $("#success").show();
                        $("#success").html(datas[1]);
                    } else {
                        $("#error").show();
                        $("#error").html(datas[1]);

                        $("#success").hide();
                    }
                });
                
                img.src = _URL.createObjectURL(image);
            } else {
                $("#error").show();
                $("#error").html(msg);
                
                $("#success").hide();
            }
        };
        img.onerror = function () {
            console.log("not a valid file: " + image.type);
        };
    }
});