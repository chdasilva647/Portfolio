$("#mag2").hide();
$("#word2").hide();
$("#word3").hide();
$("#word4").hide();
$("#word5").hide();


$("#mag1").click(function() {
    $("#mag1").hide();
    $("#mag2").show();
});

$("#mag2").click(function() {
    $("#mag1").show();
    $("#mag2").hide();
});

$("#word1").click(function() {
    $("#word1").hide();
    $("#word2").show();
    $("#word3").hide();
    $("#word4").hide();
    $("#word5").hide();
});

$("#word2").click(function() {
    $("#word1").hide();
    $("#word2").hide();
    $("#word3").show();
    $("#word4").hide();
    $("#word5").hide();
});

$("#word3").click(function() {
    $("#word1").hide();
    $("#word2").hide();
    $("#word3").hide();
    $("#word4").show();
    $("#word5").hide();
});

$("#word4").click(function() {
    $("#word1").hide();
    $("#word2").hide();
    $("#word3").hide();
    $("#word4").hide();
    $("#word5").show();
});

$("#word5").click(function() {
    $("#word1").show();
    $("#word2").hide();
    $("#word3").hide();
    $("#word4").hide();
    $("#word5").hide();
});