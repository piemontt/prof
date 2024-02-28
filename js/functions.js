$( document ).ready(function() {
	$('.video__card').matchHeight();
	$('.whatwedo__slider').slick({
		slidesToShow: 3,
		autoPlay: true,
		
	})
	console.log('success')
	jQuery(function(){
		jQuery("#bgndVideo").YTPlayer({
			showControls: 0,
		});
	});
});
