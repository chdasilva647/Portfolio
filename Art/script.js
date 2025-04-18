
$("#sketchName").hover(function () {
    $("#sketchName").css("color", "#133d8a");
    $("#sketchName").css("background-color", "#ffc400");
    $("#sketchName").css("transform", "scale(1.1)");
    $("#sketchName").css("transform", "rotate(5deg)");
    $("#sketchName").css("cursor", "pointer");
},
    function () {
        $("#sketchName").css("color", "##faf7f7");
        $("#sketchName").css("background-color", "#133d8a");
        $("#sketchName").css("transform", "scale(1)");
        $("#sketchName").css("transform", "rotate(0deg)");
        $("#sketchName").css("cursor", "default");
    })


$("#bookName").hover(function () {
    $("#bookName").css("color", "#133d8a");
    $("#bookName").css("background-color", "#ffc400");
    $("#bookName").css("transform", "scale(1.1)");
    $("#bookName").css("cursor", "pointer");
},
    function () {
        $("#bookName").css("color", "##faf7f7");
        $("#bookName").css("background-color", "#133d8a");
        $("#bookName").css("transform", "scale(1)");
        $("#bookName").css("cursor", "default");
    })


$("#paintName").hover(function () {
    $("#paintName").css("color", "#133d8a");
    $("#paintName").css("background-color", "#ffc400");
    $("#paintName").css("transform", "scale(1.1)");
    $("#paintName").css("transform", "rotate(-5deg)");
    $("#paintName").css("cursor", "pointer");
},
    function () {
        $("#paintName").css("color", "##faf7f7");
        $("#paintName").css("background-color", "#133d8a");
        $("#paintName").css("transform", "scale(1)");
        $("#paintName").css("transform", "rotate(0deg)");
        $("#paintName").css("cursor", "default");
    })
