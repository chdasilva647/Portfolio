$("#bearP").hide();
$("#dogP").hide();
$("#mouseP").hide();
$("#toothP").hide();
$("#back").hide();

$("#sub").click(function () {
    $("#bearP").hide();
    $("#dogP").hide();
    $("#mouseP").hide();
    $("#toothP").hide();
    $("#bear").show();
    $("#dog").show();
    $("#mouse").show();
    $("#tooth").show();
    $("#back").hide();
   
});

$("#back").click(function () {
    $("#bearP").hide();
    $("#dogP").hide();
    $("#mouseP").hide();
    $("#toothP").hide();
    $("#back").hide();
    $("#bear").show();
    $("#dog").show();
    $("#mouse").show();
    $("#tooth").show();
    $("#twooth").show();
   
});

$("#back").hover(function () {
    $("#back").css("color", "#133d8a");
    $("#back").css("background-color", "#ffc400");
    $("#back").css("transform", "scale(1.15)");
    $("#back").css("cursor", "pointer");
},
    function () {
        $("#back").css("color", "##faf7f7");
        $("#back").css("background-color", "#133d8a");
        $("#back").css("transform", "scale(1)");
        $("#back").css("cursor", "default");
    })

$("#bear").click(function(){
    $("#bearP").show();
    $("#back").show();
    $("#bear").hide();
    $("#dog").hide();
    $("#mouse").hide();
    $("#tooth").hide();
    $("#dogP").hide();
    $("#mouseP").hide();
    $("#toothP").hide();
    $("#twooth").hide();
});

$("#bear").hover(function () {
    $("#bear").css("opacity", "0.90");
    // $("#bear").css("transition", "opacity 0.5s");
    $("#bear").css("cursor", "pointer");
},
    function () {
        $("#bear").css("opacity", "1");
        $("#bear").css("cursor", "default");
    })

$("#dog").click(function () {
    $("#dogP").show();
    $("#back").show();
    $("#bearP").hide();
    $("#mouseP").hide();
    $("#bear").hide();
    $("#dog").hide();
    $("#mouse").hide();
    $("#tooth").hide();
    $("#toothP").hide();
    $("#twooth").hide();
});

$("#dog").hover(function () {
    $("#dog").css("opacity", "0.90");
    $("#dog").css("cursor", "pointer");
},
    function () {
        $("#dog").css("opacity", "1");
        $("#dog").css("cursor", "default");
    })


$("#mouse").click(function () {
    $("#mouseP").show();
    $("#back").show();
    $("#dogP").hide();
    $("#bearP").hide();
    $("#bear").hide();
    $("#dog").hide();
    $("#mouse").hide();
    $("#tooth").hide();
    $("#toothP").hide();
    $("#twooth").hide();
});

$("#mouse").hover(function () {
    $("#mouse").css("opacity", "0.90");
    $("#mouse").css("cursor", "pointer");
},
function () {
        $("#mouse").css("opacity", "1");
        $("#mouse").css("cursor", "default");
})

$("#tooth").click(function () {
    $("#toothP").show();
    $("#back").show();
    $("#dogP").hide();
    $("#bearP").hide();
    $("#mouseP").hide();
    $("#bear").hide();
    $("#dog").hide();
    $("#mouse").hide();
    $("#tooth").hide();
    $("#twooth").hide();
});

$("#tooth").hover(function () {
    $("#tooth").css("opacity", "0.90");
    $("#tooth").css("cursor", "pointer");
},
    function () {
        $("#tooth").css("opacity", "1");
        $("#tooth").css("cursor", "default");
    })

$("#twooth").click(function () {
    $("#toothP").show();
    $("#back").show();
    $("#dogP").hide();
    $("#bearP").hide();
    $("#mouseP").hide();
    $("#bear").hide();
    $("#dog").hide();
    $("#mouse").hide();
    $("#tooth").hide();
    $("#twooth").hide();
});

$("#twooth").hover(function () {
    $("#twooth").css("opacity", "0.90");
    $("#twooth").css("cursor", "pointer");
},
    function () {
        $("#twooth").css("opacity", "1");
        $("#twooth").css("cursor", "default");
    })
    
    
