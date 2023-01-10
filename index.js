function carouselFn(){
    if ($(window).width() < 500){
       $(".owl-carousel").owlCarousel({
   
        items:1,
        margin:10,
        loop:true,
        });
     }/* else if ($(window).width() < 992){
        $(".owl-carousel").owlCarousel({
   
            items:1.5,
            margin:10,
            loop:true,
            });

     } */
     else{
      $(".owl-carousel").owlCarousel({
   
       items:3.5,
       margin:20,
       loop:true,
      });
     }
    };
   
    $(document).ready(function() {
        carouselFn();
   });
   $(window).resize(function(){
        carouselFn();     
    });