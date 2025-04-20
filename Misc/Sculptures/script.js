
$("#boom2").hide();
$("#boom3").hide();
$("#boom4").hide();
$("#boom5").hide();
$("#boom6").hide();
$("#boom7").hide();
$("#apple2").hide();

$("#boom1").click(function(){
    $("#boom1").hide();
    $("#boom2").show();
    $("#boom3").hide();
    $("#boom4").hide();
    $("#boom5").hide();
    $("#boom6").hide();
    $("#boom7").hide();
});

$("#boom2").click(function(){
    $("#boom1").hide();
    $("#boom2").hide();
    $("#boom3").show();
    $("#boom4").hide();
    $("#boom5").hide();
    $("#boom6").hide();
    $("#boom7").hide();
});


$("#boom3").click(function(){
    $("#boom1").hide();
    $("#boom2").hide();
    $("#boom3").hide();
    $("#boom4").show();
    $("#boom5").hide();
    $("#boom6").hide();
    $("#boom7").hide();
});

$("#boom4").click(function(){
    $("#boom1").hide();
    $("#boom2").hide();
    $("#boom3").hide();
    $("#boom4").hide();
    $("#boom5").show();
    $("#boom6").hide();
    $("#boom7").hide();
});

$("#boom5").click(function(){
    $("#boom1").hide();
    $("#boom2").hide();
    $("#boom3").hide();
    $("#boom4").hide();
    $("#boom5").hide();
    $("#boom6").show();
    $("#boom7").hide();
});

$("#boom6").click(function(){
    $("#boom1").hide();
    $("#boom2").hide();
    $("#boom3").hide();
    $("#boom4").hide();
    $("#boom5").hide();
    $("#boom6").hide();
    $("#boom7").show();
});

$("#boom7").click(function(){
    $("#boom1").show();
    $("#boom2").hide();
    $("#boom3").hide();
    $("#boom4").hide();
    $("#boom5").hide();
    $("#boom6").hide();
    $("#boom7").hide();
});


$("#apple1").click(function(){
    $("#apple1").hide();
    $("#apple2").show();
});

$("#apple2").click(function(){
    $("#apple1").show();
    $("#apple2").hide();
});
