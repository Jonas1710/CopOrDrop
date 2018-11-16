var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z.,:;\-+_!?@#*=/\\()\[\]{}]{8,}$/;

$("#btn_login").click(function () {
    var msg = "";
    if ($("#input_username").val() == "") {
        $("#lbl_username").css("color", "red");
        msg += "<p>Benutzername ist leer</p>";
    } else {
        $("#lbl_username").css("color", "");
    }
    if ($("#input_password").val() == "") {
        $("#lbl_password").css("color", "red");
        msg += "<p>Passwort ist leer</p>";
    } else if (!$("#input_password").val().match(regex)) {
        $("#lbl_password").css("color", "red");
        msg += "<p>Passwort ist falsch</p>";
    } else {
        $("#lbl_password").css("color", "");
    }
    if (msg == "") {
        //Login
        
        $("#error").hide();
    } else {
        $("#error").show();
        $("#error").html(msg);
    }
});
