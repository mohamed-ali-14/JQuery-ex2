let about = $(".about").offset().top;
let offset2 = $(".service").offset().top;
   $(window).scroll(function(){
    if(window.scrollY >= about -50 && window.scrollY <= offset2 -50)
     $(".navbar").css({"background-color":" #ff206e", "padding-left":"20px" ,"padding-right":"20px"});
    else 
    $(".navbar").css({"background-color":"transparent", "padding-left":"0px" ,"padding-right":"0px"});

   });

   $("a").click(function(){
   let section=$(this).attr("href");
   let offsettop =$(section).offset().top;
   console.log(offsettop);
   $('html,body').animate({scrollTop:offsettop},1000)

 })
 $(document).ready(function () {
  $(".sk-folding-cube").fadeOut(1000,function(){
    $(".spinner").fadeOut(1000)
      $("body").css({"overflow-y":"auto"})
    })
  });
  
