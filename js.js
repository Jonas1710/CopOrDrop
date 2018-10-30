$(document).ready(function () {
    "use strict";
	var image1 = 0;
	var image2 = 0;
    $(".btnStats").click(function () {
        $('html,body').animate({
            scrollTop: $(document).height() - $(window).height()
        }, 'slow');
    });
	$("#image1").click(function () {
		image1++;
		alert("Bild1 angeclickt: " + image1);
	});
	$("#image2").click(function () {
		image2++;
		alert("Bild2 angeclickt: " + image2);
	});
});