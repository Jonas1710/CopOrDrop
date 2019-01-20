/*
Autor/en: Micha Dubach
Version:  1.00
Datum:    27.11.18
*/

if (sessionStorage.getItem("session")) {
} else {
    window.location.href = "index.html";
}

/* Klick auf Logout beendet Session */
$("#btn_logout").click(function () {
    sessionStorage.clear();
    window.location.href = "index.html";
});
