(function ($) {
"use strict";

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

$('.menu-tirgger').on('click',function(){
	$('.mobile-menu-wrapper').addClass('open');
	$('body').css('overflow','hidden');
});

$('.close-btn').on('click',function(){
	$('.mobile-menu-wrapper').removeClass('open');
	$('body').css('overflow','inherit');
});


// WOW active
new WOW().init();


})(jQuery);