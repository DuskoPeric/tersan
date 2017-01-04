$(document).ready(function(){
	      $(".ref-side-nav ul li").click(function(){
          $(".ref-side-nav ul li").removeClass("rsn-active");
          $(this).addClass("rsn-active");
        })
	$(".nav-holder button").click(function(){
		$("nav").slideToggle();
	});
	$(".side-nav ul li").click(function(){
          $(".side-nav ul li a").removeClass("active");
          $(this).find("a").addClass("active");
    })
	$(".point").click(function(){
		$(this).find(">div").toggle();
		$(this).toggleClass("pressed")
	})
      $(".inner-navigation div").click(function(){
          $(".inner-navigation div").removeClass("inner-active");
          $(this).addClass("inner-active");
        })
			 $('.slider').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  dots: false,
		  centerMode: true,
		  focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
		});
		var e=1;
		
		$(".scroll-right").click(function(){
			
			if(e!=$(this).parent().parent().find("h5").length){
				e++;
				$(".holder-text h5").removeClass("active");
				$(".holder-text p").removeClass("active");
				$(".holder-text h5[data-rb='"+e+"']").addClass("active");	
				$(".holder-text p[data-rb='"+e+"']").addClass("active");	
			}
			else{
				e=1;
				$(".holder-text h5").removeClass("active");
				$(".holder-text p").removeClass("active");
				$(".holder-text h5[data-rb='"+e+"']").addClass("active");	
				$(".holder-text p[data-rb='"+e+"']").addClass("active");				
			}
		})
		$(".scroll-left").click(function(){
			if(e==1){
				e=$(this).parent().parent().find("h5").length;
				$(".holder-text h5").removeClass("active");
				$(".holder-text p").removeClass("active");
				$(".holder-text h5[data-rb='"+e+"']").addClass("active");	
				$(".holder-text p[data-rb='"+e+"']").addClass("active");	
			}
			else{
				e--;
				$(".holder-text h5").removeClass("active");
				$(".holder-text p").removeClass("active");
				$(".holder-text h5[data-rb='"+e+"']").addClass("active");	
				$(".holder-text p[data-rb='"+e+"']").addClass("active");				
			}			
		})
})