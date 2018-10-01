 $(document).ready(function () {
   $(window).on("scroll", function () {
       if($(window).scrollTop() > 100)    {
           $("#main-nav").addClass("background-black")
       } else {
           $("#main-nav").removeClass("background-black");
       }
   })
}) ;

