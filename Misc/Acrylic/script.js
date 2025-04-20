$("#dog1").click(function () {
    $("#dog1").toggleClass("large");
    $("#dog2").removeClass("large");
    $("#dog3").removeClass("large");
    $("#dog4").removeClass("large");
});

$("#dog2").click(function () {
    $("#dog2").toggleClass("large");
    $("#dog1").removeClass("large");
    $("#dog3").removeClass("large");
    $("#S4").removeClass("large");
});

$("#dog3").click(function () {
    $("#dog3").toggleClass("large");
    $("#dog1").removeClass("large");
    $("#dog2").removeClass("large");
    $("#dog4").removeClass("large");
});

$("#dog4").click(function () {
    $("#dog4").toggleClass("large");
    $("#dog1").removeClass("large");
    $("#dog2").removeClass("large");
    $("#dog3").removeClass("large");
});
