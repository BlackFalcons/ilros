"use strict"
$("#horizontalmenu ul").css("backgroundColor", "#00519a");
$(".normal").css("borderLeft", "0px");
$("#navbar").remove();
$("a:contains('Scripts')").parents().eq(0).hide()