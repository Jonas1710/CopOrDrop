/*
Autor/en: Nick Weyermann
Version:  1.04
Datum:    27.11.18
*/

if (sessionStorage.getItem("session")) {
    window.location.href = "index.html";
} else {
}

/* Klick auf Registrieren überprüft Eingabe, falls korrekt, wird Script ausgeführt */
$("#btn_register").click(function () {
    var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z.,:;\-+_!?@#*=\/\\()\[\]{}]{8,}$/,
        msg = "";
    if ($("#input_username").val() === "") {
        $("#lbl_username").css("color", "red");
        msg += "<p>Benutzername ist leer</p>";
    } else {
        $("#lbl_username").css("color", "");
    }
    if ($("#input_password").val() === "") {
        $("#lbl_password").css("color", "red");
        msg += "<p>Passwort ist leer</p>";
    } else if (!$("#input_password").val().match(regex)) {
        $("#lbl_password").css("color", "red");
        msg += "<p>Passwort entspricht nicht den Richtlinien</p>";
        msg += "<p> - Min. 1 Grossbuchstabe</p>";
        msg += "<p> - Min. 1 Kleinbuchstabe</p>";
        msg += "<p> - Min. 1 Zahl</p>";
        msg += "<p> - Min. 8 Zeichen</p>";
    } else {
        $("#lbl_password").css("color", "");
    }
    if ($("#input_password_2").val() === "") {
        $("#lbl_password_2").css("color", "red");
        msg += "<p>Wiederholtes Passwort ist leer</p>";
    } else if ($("#input_password_2").val() !== $("#input_password").val()) {
        $("#lbl_password_2").css("color", "red");
        msg += "<p>Wiederholtes Passwort stimmt nicht überein</p>";
    } else {
        $("#lbl_password_2").css("color", "");
    }
    if (msg === "") {
        var username = $("#input_username").val(),
            password = $("#input_password").val();
        $.post("db_scripts/registration.php", { username: username, password: password }, function (data) {
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
        $("#error").show();
        $("#error").html(msg);
                
        $("#success").hide();
    }
});
