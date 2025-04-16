// learned how to use jQuery and hhow to make this simple animation in my graphic design 2 class 
$("#header").hide();
$("#mainPage").hide();

$("#CD").delay(700).fadeOut(400);

$("#mainPage").delay(1000).fadeIn(700);
$("#header").delay(1000).fadeIn(700);



// $("#nav a").hover(function () {
//     $("#nav a").css("color", "#ffc400");
//   },
//     function () {
//       $("#nav at").css("color", "#faf7f7");
//     })
  

$("#navStudio").click(function(){
    $("#non-studio").hide();
    $("#studio").show();
});