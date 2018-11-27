if (sessionStorage.getItem("session")) {
} else {
    window.location.href = "index.html";
}

$("#btn_logout").click(function () {
    sessionStorage.clear();
    window.location.href = "index.html";
});
