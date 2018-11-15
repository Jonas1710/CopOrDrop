var regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z.,:;\-+_!?@#*=/\\()\[\]{}]{8,}$/;
$("#btn_register").click(function () {
    if ($("#input_username").val() != "") {
        $("#lbl_username").css("color", "");
    } else {
        $("#lbl_username").css("color", "red");
    }
    if ($("#input_password").val().match(regex)) {
        $("#lbl_password").css("color", "");
    } else {
        $("#lbl_password").css("color", "red");
    }
    if ($("#input_password_2").val() == $("#input_password").val()) {
        $("#lbl_password_2").css("color", "");
    } else {
        $("#lbl_password_2").css("color", "red");
    }
});
