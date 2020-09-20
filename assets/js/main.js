jQuery(document).ready(function($) {
	$('.banner-area').owlCarousel({
    loop:true,
	dots:true,
	nav:false,
	autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
            
        },
        992:{
            items:1,
            
        }
    }
});
	$('.testimonial').owlCarousel({
    loop:true,
	dots:true,
	nav:false,
	autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        992:{
            items:2,
            
        }
    }
});
$('.clients').owlCarousel({
    loop:true,
	dots:false,
	nav:false,
	autoplay:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        992:{
            items:4,
            
        }
    }
});
	
	
  $('.project-popup').magnificPopup({
	  type:'image',
	  gallery:{
		enabled:true
	  },
	  
	  });
	  $('.video-popup').magnificPopup({
	  type:'iframe'
	  
	  });
	  
	  
	$('.counter').counterUp({
    delay: 10,
    time: 1000
		});
  
	$('#nav').onePageNav();
  
});
 $(window).on('scroll',function(){
	 if($(this).scrollTop()>1){
		 $('.header-area').addClass("sticky");
	 }
	 else{
		 $('.header-area').removeClass("sticky");
	 }
 })