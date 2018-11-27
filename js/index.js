if (sessionStorage.getItem("session")) {
    $("#btn_open_upload").show();
} else {
    $("#btn_open_upload").hide();
}

/* show images */
function show_image(bild1, bild2) {
    $.post("db_scripts/show_image.php", { bild1: bild1, bild2: bild2 }, function (data) {
        var datas = data.split(";");
        var bild3 = datas[0];
        $("#image1").attr("alt", datas[0]);
        $("#image_name1").text(datas[1]);
        $("#image1").attr("src", "data:" + datas[2] + ";base64," + datas[3]);
        $.post("db_scripts/show_image.php", { bild1: bild1, bild2: bild2, bild3: bild3 }, function (data) {
            var datas = data.split(";");
            $("#image2").attr("alt", datas[0]);
            $("#image_name2").text(datas[1]);
            $("#image2").attr("src", "data:" + datas[2] + ";base64," + datas[3]);
        });
    });
}

$(document).ready(show_image(undefined, undefined));

/* image click functions */
$("#image1").click(function () {
    var bildID1 = $("#image1").attr("alt"),
        bildID2 = $("#image2").attr("alt");
    $.post("db_scripts/image1.php", { bildID1: bildID1, bildID2: bildID2 });
    
    show_image(bildID1, bildID2);
});
$("#image2").click(function () {
    var bildID1 = $("#image1").attr("alt"),
        bildID2 = $("#image2").attr("alt");
    $.post("db_scripts/image2.php", { bildID1: bildID1, bildID2: bildID2 });
    
    show_image(bildID1, bildID2);
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

/* image upload -> check file */
var _URL = window.URL || window.webkitURL;
$("#input_file").change(function () {
    $("#selected_file").text($("#input_file")[0].files.item(0).name);
    var image = this.files[0],
        img = new Image(),
        msg = "";
    if ((image)) {
        img.src = _URL.createObjectURL(image);
        img.onload = function () {
            var width = img.naturalWidth,
                height = img.naturalHeight;
            if (width > 800 || height > 800) {
                msg += "<p>Bild zu gross</p>";
            } else if (width < 300 || height < 300) {
                msg += "<p>Bild zu klein</p>";
            }
            if (msg === "") {
                $("#btn_upload").removeAttr("disabled");
                
                $("#success").show();
                $("#success").html("<p>Bild entspricht Anforderungen</p>");
                
                $("#error").hide();
                
                img.src = _URL.revokeObjectURL(img.src);
            } else {
                $("#btn_upload").attr("disabled", "disabled");
                
                $("#error").show();
                $("#error").html(msg);
                
                $("#success").hide();
            }
        };
    }
});

/* image upload -> check form */
$("#btn_upload").click(function () {
    var image = $("#input_file")[0].files[0],
        img = new Image(),
        msg = "";
    if ((image)) {
        if ($("#input_imagename").val() === "") {
            msg += "<p>Bildername ist leer</p>";
        }
        if (msg === "") {
            $.ajax({
                url: "db_scripts/upload_image.php",
                type: "POST",
                data: new FormData($("#image_upload")[0]),
                cache: false,
                contentType: false,
                processData: false
            })
                .done(function (data) {
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
        } else {
            $("#btn_upload").attr("disabled", "disabled");

            $("#error").show();
            $("#error").html(msg);

            $("#success").hide();
        }
    } else {
        $("#btn_upload").attr("disabled", "disabled");
        
        $("#error").show();
        $("#error").html("<p>Bild auswählen</p>");

        $("#success").hide();
    }
});