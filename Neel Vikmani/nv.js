
$("#r1").on("click",function(){
	
	
	$(this).parent().animate({width :"0"},function(){
			// $(this).remove();
	});
	$("#slanted").animate({width : "0"},function(){
		// $(this).remove();
	$("#about-page").delay(100).fadeIn(500);
	});
});


$("#r2").on("click",function(){
	
	$(this).parent().animate({width :"0"},function(){
			// $(this).remove();
	});

	$("#slanted").animate({width :"0"},function(){
		// $(this).remove();
	$("#resume-page").delay(100).fadeIn(500,function(){
		$(".progress-bar").loading();
	});
	});
});

$("#r3").on("click",function(){
	
	$(this).parent().animate({width :"0"},function(){
			// $(this).remove();
	});
	$("#slanted").animate({width : "0"},function(){
		// $(this).remove();
	$("#projects-page").delay(100).fadeIn(500);
	});
});


$("#r4").on("click",function(){
	
	$(this).parent().animate({width :"0"});
	$("#slanted").animate({width : "0"},function(){
	$("#contact-page").delay(100).fadeIn(500);
	});
});

$(".fa-times").on("click",function(){
	if (($(window).width()>1000)){
	$(this).parent().parent().parent().fadeOut(400,function(){
		$("#slanted").animate({width : "50%"});
		$("#lis").animate({width : "60%"});

	});	

	}
	else{
		$(this).parent().parent().parent().fadeOut(400,function(){
		
		$("#lis").animate({width : "100%"});

	});	

	}
});

