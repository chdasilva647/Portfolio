
$("#grocery").hide();
$("#upcycle").hide();

$("#zine1Closed").click(function() {
    $("#grocery").show();
    $("#upcycle").hide();
    $("#types").hide();
});

$("#zine2Closed").click(function() {
    $("#upcycle").show();
    $("#grocery").hide();
    $("#types").hide();
});

$("#sub").click(function(){
    $("#grocery").hide();
    $("#upcycle").hide();
    $("#types").show();
});

$("#zine1e").click(function() {
    $("#zine1e").toggleClass("turn");
});

$("#zine2c").click(function() {
    $("#zine2c").toggleClass("turn");
});
