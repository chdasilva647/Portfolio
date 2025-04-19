
$("#studio").hide();
$("#non-studio").hide();
$("#sub1").hide();
$("#sub2").hide();

$("#studioName").hover(function () {
    $("#studioName").css("color", "#133d8a");
    $("#studioName").css("background-color", "#ffc400");
    $("#studioName").css("transform", "scale(1.1)");
    $("#studioName").css("transform", "rotate(5deg)");
    $("#studioName").css("cursor", "pointer");
},
    function () {
        $("#studioName").css("color", "##faf7f7");
        $("#studioName").css("background-color", "#133d8a");
        $("#studioName").css("transform", "scale(1)");
        $("#studioName").css("transform", "rotate(0deg)");
        $("#studioName").css("cursor", "default");
    })


$("#non-studioName").hover(function () {
    $("#non-studioName").css("color", "#133d8a");
    $("#non-studioName").css("background-color", "#ffc400");
    $("#non-studioName").css("transform", "scale(1.1)");
    $("#non-studioName").css("transform", "rotate(-5deg)");
    $("#non-studioName").css("cursor", "pointer");
},
    function () {
        $("#non-studioName").css("color", "##faf7f7");
        $("#non-studioName").css("background-color", "#133d8a");
        $("#non-studioName").css("transform", "scale(1)");
        $("#non-studioName").css("transform", "rotate(0deg)");
        $("#non-studioName").css("cursor", "default");
    })

$("#snav").click(function() {
    $("#studio").toggle();
    $("#sub1").show();
    $("#sub2").hide();
    $("#non-studio").hide();
    $("#types").hide();
});

$("#nsnav").click(function() {
    $("#non-studio").toggle();
    $("#sub2").show();
    $("#sub1").hide();
    $("#studio").hide();
    $("#types").hide();
});
    

$("#studioName").click(function() {
    $("#studio").toggle();
    $("#sub1").show();
    $("#sub2").hide();
    $("#non-studio").hide();
    $("#types").hide();
});

$("#non-studioName").click(function() {
    $("#non-studio").toggle();
    $("#sub2").show();
    $("#sub1").hide();
    $("#studio").hide();
    $("#types").hide();
});

$("#headerImage").click(function(){
    $("#studio").hide();
    $("#non-studio").hide();
    $("#types").show();
    $("#sub1").hide();
    $("#sub2").hide();
});