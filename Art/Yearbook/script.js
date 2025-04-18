$("#t2").hide();
$("#t3").hide();
$("#t4").hide();
$("#c2").hide();
$("#c3").hide();


$("#t1").click(function(){
    $("#t1").hide();
    $("#t2").show();
    $("#t3").hide();
    $("#t4").hide();
});

$("#t2").click(function(){
    $("#t1").hide();
    $("#t2").hide();
    $("#t3").show();
    $("#t4").hide();
});

$("#t3").click(function(){
    $("#t1").hide();
    $("#t2").hide();
    $("#t3").hide();
    $("#t4").show();
});

$("#t4").click(function(){
    $("#t1").show();
    $("#t2").hide();
    $("#t3").hide();
    $("#t4").hide();
});

$("#c1").click(function(){
    $("#c1").hide();
    $("#c2").show();
    $("#c3").hide();
});

$("#c2").click(function(){
    $("#c1").hide();
    $("#c2").hide();
    $("#c3").show();
});

$("#c3").click(function(){
    $("#c1").show();
    $("#c2").hide();
    $("#c3").hide();
});


$("#t4b").click(function(){
    $("#t4b").toggleClass("large");
});