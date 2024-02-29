$( document ).ready(function() {
	$('.video__card').matchHeight();
/*	$('.tz-not__card__title').matchHeight();*/
	$('.whatwedo__slider').slick({
		slidesToShow: 3,
		autoPlay: true,
		prevArrow: '<img class="slick-prev" src="src/images/prew.svg">',
		nextArrow: '<img class="slick-next" src="src/images/next.svg">',
	})
	console.log('success')
	jQuery(function(){
		jQuery("#bgndVideo").YTPlayer({
			showControls: 0,
		});
	});
});
