
$("#studio").hide();
$("#non-studio").hide();

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

// $(".navItems").hover(function () {
//     $(".navItems").css("color", "#ffc400");
//     $(".navItems").css("cursor", "pointer");
// },
//     function () {
//         $(".navItems").css("color", "#faf7f7;");
//         $(".navItems").css("cursor", "default");
//     })
  


$("#studioName").click(function() {
    $("#studio").toggle();
    $("#non-studio").hide();
});

$("#non-studioName").click(function() {
    $("#non-studio").toggle();
    $("#studio").hide();
});

$("#s").click(function() {
    $("#studio").show();
    $("#non-studio").hide();
});

$("#ns").click(function() {
    $("#non-studio").show();
    $("#studio").hide();
});

$("#s").hover(function () {
    $("#s").css("color", "#ffc400");
    $("#s").css("cursor", "pointer");
},function () {
        $("#s").css("color", "#faf7f7");
        $("#s").css("cursor", "default");
})

$("#ns").hover(function () {
    $("#ns").css("color", "#ffc400");
    $("#ns").css("cursor", "pointer");
},function () {
        $("#ns").css("color", "#faf7f7");
        $("#ns").css("cursor", "default");
})

