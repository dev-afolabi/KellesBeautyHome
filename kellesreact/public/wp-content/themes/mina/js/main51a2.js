(function ($) {
 "use strict";
    
	var $tabs = $('.nav-month li');
	var flagscroll=true;
	
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		if(  y > 4000 && flagscroll==true ) {
			flagscroll=false;
			$('.home-stats').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
					}, {
					duration: 4000,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
		} 
	});
	
	//fix menu cart new line problem
	if ( $("#menu-main-menu").outerHeight() > 60 ) {

		var liItems = $("#menu-main-menu > .menu-item").get();
		//iterate through this array in reverse order    
		for(var i = liItems.length - 1; i >= 0; --i){

		  	//do Something
		  	if ( $("#menu-main-menu").outerHeight() < 60 ){
			
			}else{	
				$("#"+liItems[i].id).remove();
			}	
		}
	}

	$('.about-stats').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
			}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	$(".selectpicker").change(function(){
		var selected = $('.selectpicker option:selected').val();
		$(".panel-default").addClass("hide");
		$("."+selected).removeClass("hide");      
	});

	$(".services-gallery > .row").slice(0, 3).show();
		
	$("a,section,div,span,li,input[type='text'],input[type='button'],tr,button").on("click", function(){

		if ($(this).hasClass("month-prev")) { 
			$tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
			return false;
		}
		
		if ($(this).hasClass("month-next")) { 
			$tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
			return false;
		}

		if ($(this).hasClass("available")) { 
			$(".calendar .calendar-body ul li .selected").removeClass("selected").addClass("available");
			$(this).addClass('selected');
		}
		
		if ($(this).hasClass("time-available")) { 
			$(".calendar .calendar-footer ul li .time-selected").removeClass("time-selected").addClass("time-available");
			$(this).addClass('time-selected');
		}
		
		if ($(this).hasClass("load-more")) { 
			$(".services-gallery > .row:hidden").slice(0, 1).slideDown();
			if ($(".services-gallery > .row:hidden").length == 0) {
				$(".load-more").fadeOut('slow');
			}
			$('html,body').animate({
				scrollTop: $(this).offset().top-200
			}, 1500);
		}
		
		if ($(this).hasClass("closecanvas")) { 
			$("body").removeClass("offcanvas-stop-scrolling");
		}
		
		if ($(this).hasClass("accordion-link")) { 
			$(this).addClass('selected');
		}
				
		if ($(this).hasClass("services-tab")) { 

			$('.services-tab').each(function () {$(this).css('background-image','url("'+$(this).data('inactive')+'")');});
			$(this).css('background-image','url("'+$(this).data('active')+'")');
			return true;
		}

		if ($(this).hasClass("calclick") || $(this).hasClass("time-selected")) {

			var time = $(".time-selected").html();
			if ( typeof time != 'undefined' ){
				$(".booking-schedule").html('<h3>'+$(".calendar-body .selected").data('dof')+'</h3><p>'+$(".calendar-body .selected").data('date')+' | <span>'+$(".time-selected").html()+'</span></p>');
				$("#calendar_confirm").removeClass('hidden');
				$("#calendar_confirm").data('time', $(".calendar-body .selected").data('date')+' | '+$(".time-selected").html());
				$("#calendar_confirm").data('dof', $(".calendar-body .selected").data('dof'));
				$("#calendar_confirm").data('timestamp', $(".calendar-body .selected").data('timestamp'));
				setTimeout(function() { if ($("#calendar_confirm").hasClass("added")) {  window.location.href = $("#calendar_confirm").data('cart'); } }, 1500);
				setTimeout(function() { if ($("#calendar_confirm").hasClass("added")) {  window.location.href = $("#calendar_confirm").data('cart'); } }, 3200);
			}
		}
	});

	$("a").on('mouseenter', function(){ 

		if ($(this).hasClass("services-tab")) { 
			$(this).css('background-image','url("'+$(this).data('active')+'")');
		}
	});
	
	$("a").on('mouseleave', function(){ 

		if ($(this).hasClass("services-tab") && ! $(this).parent().hasClass("active")) { 
			$(this).css('background-image','url("'+$(this).data('inactive')+'")');
		}
	});

	$('.responsive-tabs').responsiveTabs({
		accordionOn: ['xs']
	});
		 
	 $('.loop').owlCarousel({
		center: true,
		loop: true,
		autoplay: true,
		margin: 0,
		responsive: {
			0:{
				items:2
			},
			600:{
				items:4
			},            
			960:{
				items:6
			},
			1200:{
				items:6
			}
		}
	 });
  
})(jQuery);