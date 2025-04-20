$("#S1").click(function () {
    $("#S1").toggleClass("large");
    $("#S2").removeClass("large");
    $("#S3").removeClass("large");
    $("#S4").removeClass("large");
    $("#S5").removeClass("large");
});

$("#S2").click(function () {
    $("#S2").toggleClass("large");
    $("#S1").removeClass("large");
    $("#S3").removeClass("large");
    $("#S4").removeClass("large");
    $("#S5").removeClass("large");
});

$("#S3").click(function () {
    $("#S3").toggleClass("large");
    $("#S1").removeClass("large");
    $("#S2").removeClass("large");
    $("#S4").removeClass("large");
    $("#S5").removeClass("large");
});

$("#S4").click(function () {
    $("#S4").toggleClass("large");
    $("#S1").removeClass("large");
    $("#S2").removeClass("large");
    $("#S3").removeClass("large");
    $("#S5").removeClass("large");
});

$("#S5").click(function () {
    $("#S5").toggleClass("large");
    $("#S1").removeClass("large");
    $("#S2").removeClass("large");
    $("#S3").removeClass("large");
    $("#S4").removeClass("large");
});