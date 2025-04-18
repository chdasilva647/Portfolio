$("#toyName").hover(function () {
    $("#toyName").css("color", "#133d8a");
    $("#toyName").css("background-color", "#ffc400");
    $("#toyName").css("transform", "scale(1.1)");
    $("#toyName").css("transform", "rotate(5deg)");
    $("#toyName").css("cursor", "pointer");
},
    function () {
        $("#toyName").css("color", "##faf7f7");
        $("#toyName ").css("background-color", "#133d8a");
        $("#toyName").css("transform", "scale(1)");
        $("#toyName").css("transform", "rotate(0deg)");
        $("#toyName").css("cursor", "default");
    })


$("#bagName").hover(function () {
    $("#bagName").css("color", "#133d8a");
    $("#bagName").css("background-color", "#ffc400");
    $("#bagName").css("transform", "scale(1.1)");
    $("#bagName").css("transform", "rotate(-5deg)");
    $("#bagName").css("cursor", "pointer");
},
    function () {
        $("#bagName").css("color", "##faf7f7");
        $("#bagName").css("background-color", "#133d8a");
        $("#bagName").css("transform", "scale(1)");
        $("#bagName").css("transform", "rotate(0deg)");
        $("#bagName").css("cursor", "default");
    })