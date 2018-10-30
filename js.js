var image1 = 0;
var image2 = 0;

$("#showStats").click(function () {
    var site = window.location.href;
    site += "statistik.html";
    window.location.href = site;
});

$("#showMain").click(function () {
    var site = window.location.origin;
    site += "/CopOrDrop/";
    window.location.href = site;
});
$("#image1").click(function () {
    image1++;
    alert("Bild1 angeclickt: " + image1);
});
$("#image2").click(function () {
    image2++;
    alert("Bild2 angeclickt: " + image2);
});