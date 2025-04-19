$("#roseP").hide();
$("#plaidP").hide();
$("#crossP").hide();
$("#bodyP").hide();
$("#back").hide();

$("#sub").click(function () {
    $("#roseP").hide();
    $("#plaidP").hide();
    $("#crossP").hide();
    $("#bodyP").hide();
    $("#back").hide();
    $("#rose").show();
    $("#plaid").show();
    $("#cross").show();
    $("#body").show();
   
});

$("#back").click(function () {
    $("#roseP").hide();
    $("#plaidP").hide();
    $("#crossP").hide();
    $("#bodyP").hide();
    $("#back").hide();
    $("#rose").show();
    $("#plaid").show();
    $("#cross").show();
    $("#body").show();
   
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

$("#rose").click(function () {
    $("#roseP").show();
    $("#back").show();
    $("#plaidP").hide();
    $("#crossP").hide();
    $("#rose").hide();
    $("#plaid").hide();
    $("#cross").hide();
    $("#body").hide();
    $("#bodyP").hide();
});
$("#rose").hover(function () {
    $("#rose").css("opacity", "0.90");
    $("#rose").css("transition", "opacity 0.5s");
    $("#rose").css("cursor", "pointer");
},
    function () {
        $("#rose").css("opacity", "1");
        $("#rose").css("cursor", "default");
    })

$("#plaid").click(function () {
    $("#plaidP").show();
    $("#back").show();
    $("#roseP").hide();
    $("#crossP").hide();
    $("#rose").hide();
    $("#plaid").hide();
    $("#cross").hide();
    $("#body").hide();
    $("#bodyP").hide();
});

$("#plaid").hover(function () {
    $("#plaid").css("opacity", "0.90");
    $("#plaid").css("transition", "opacity 0.5s");
    $("#plaid").css("cursor", "pointer");
},
    function () {
        $("#plaid").css("opacity", "1");
        $("#plaid").css("cursor", "default");
    })


$("#cross").click(function () {
    $("#crossP").show();
    $("#back").show();
    $("#plaidP").hide();
    $("#roseP").hide();
    $("#rose").hide();
    $("#plaid").hide();
    $("#cross").hide();
    $("#body").hide();
    $("#bodyP").hide();
});

$("#cross").hover(function () {
    $("#cross").css("opacity", "0.90");
    $("#cross").css("transition", "opacity 0.5s");
    $("#cross").css("cursor", "pointer");
},
function () {
        $("#cross").css("opacity", "1");
        $("#cross").css("cursor", "default");
})

$("#body").click(function () {
    $("#bodyP").show();
    $("#back").show();
    $("#plaidP").hide();
    $("#roseP").hide();
    $("#crossP").hide();
    $("#rose").hide();
    $("#plaid").hide();
    $("#cross").hide();
    $("#body").hide();
});

$("#body").hover(function () {
    $("#body").css("opacity", "0.90");
    $("#body").css("transition", "opacity 0.5s");
    $("#body").css("cursor", "pointer");
},
    function () {
        $("#body").css("opacity", "1");
        $("#body").css("cursor", "default");
    })
    
