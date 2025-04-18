$("#p1").hide();
$("#p2").hide();
$("#p3").hide();
$("#p4").hide();
$("#p5").hide();
$("#p6").hide();
$("#back").hide();


$("#sub").click(function () {
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s1").show();
    $("#s2").show();
    $("#s3").show();
    $("#s4").show();
    $("#s5").show();
    $("#s6").show();
   
});

$("#back").click(function () {
    $("#back").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s1").show();
    $("#s2").show();
    $("#s3").show();
    $("#s4").show();
    $("#s5").show();
    $("#s6").show();
   
});

$("#s1").click(function(){
    $("#p1").show();
    $("#back").show();
    $("#s1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});

$("#s1").hover(function () {
    $("#s1").css("opacity", "0.90");
    ("#s1").css("transition", "opacity 0.3s ease");
},
    function () {
        $("#s1").css("opacity", "1");
    })

$("#s2").click(function(){
    $("#p2").show();
    $("#back").show();
    $("#s1").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});

$("#s2").hover(function () {
    $("#s2").css("opacity", "0.90");
    ("#s2").css("transition", "opacity 0.3s ease");
},
    function () {
        $("#s2").css("opacity", "1");
    })


$("#s3").click(function(){
    $("#p3").show();
    $("#back").show();
    $("#s1").hide();
    $("#p2").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});
$("#s3").hover(function () {
    $("#s3").css("opacity", "0.90");
    ("#s3").css("transition", "opacity 0.3s ease");
},
function () {
        $("#s3").css("opacity", "1");
})

$("#s4").click(function(){
    $("#p4").show();
    $("#back").show();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p5").hide();
    $("#p6").hide();
    $("#s1").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});

$("#s4").hover(function () {
    $("#s4").css("opacity", "0.90");
    ("#s4").css("transition", "opacity 0.3s ease");
},
    function () {
        $("#s4").css("opacity", "1");
    })

$("#s5").click(function(){
    $("#p5").show();
    $("#back").show();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p6").hide();
    $("#s1").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});

$("#s5").hover(function () {
    $("#s5").css("opacity", "0.90");
    ("#s5").css("transition", "opacity 0.3s ease");
},
    function () {
        $("#s5").css("opacity", "1");
    })

$("#s6").click(function () {
    $("#p6").show();
    $("#back").show();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#s1").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
});

$("#s6").hover(function () {
    $("#s6").css("opacity", "0.90");
    ("#s6").css("transition", "opacity 0.3s ease");
},
    function () {
        $("#s6").css("opacity", "1");
    })
    
    