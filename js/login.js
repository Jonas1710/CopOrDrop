if (sessionStorage.getItem("session")) {
    window.location.href = "index.html";
} else {
}

$("#btn_login").click(function () {
    var msg = "";
    if ($("#input_username").val() === "") {
        $("#lbl_username").css("color", "red");
        msg += "<p>Benutzername ist leer</p>";
    } else {
        $("#lbl_username").css("color", "");
    }
    if ($("#input_password").val() === "") {
        $("#lbl_password").css("color", "red");
        msg += "<p>Passwort ist leer</p>";
    } else {
        $("#lbl_password").css("color", "");
    }
    if (msg === "") {
        var username = $("#input_username").val(),
            password = $("#input_password").val();
        $.post("db_scripts/login.php", { username: username, password: password }, function (data) {
            var datas = data.split(";");
            if (datas[0] === "true") {
                sessionStorage.setItem("session", datas[1]);
                window.location.href = "index.html";
                
                /*$("#error").hide();
                
                $("#success").show();
                $("#success").html(datas[1]);*/
            } else {
                $("#error").show();
                $("#error").html(datas[1]);
                
                $("#success").hide();
            }
        });
    } else {
        $("#error").show();
        $("#error").html(msg);
                
        $("#success").hide();
    }
});
