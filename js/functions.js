$( document ).ready(function() {
	$('.whatwedo__slider').slick({
		slidesToShow: 3,
		autoPlay: true,
		prevArrow: '<img class="slick-prev" src="src/images/prew.svg">',
		nextArrow: '<img class="slick-next" src="src/images/next.svg">',
	});
	$('.consumers__slider').slick({
		slidesToShow: 5,
		arrows: false,
		autoplay: true,
	});
	jQuery(function(){
		jQuery("#bgndVideo").YTPlayer({
			showControls: 0,
		});
	});
	$('.big-manufacture__slider').slick({
		slidesToShow: 3,
		prevArrow: '<img class="slick-prev" src="src/images/prew.svg">',
		nextArrow: '<img class="slick-next" src="src/images/next.svg">',
	});
		$('.blog__slider').slick({
		slidesToShow: 3,
		rows: 0,
		prevArrow: '<img class="slick-prev" src="src/images/prew.svg">',
		nextArrow: '<img class="slick-next" src="src/images/next.svg">',
	});
	$('.video__card').matchHeight();
	$('.power___card').matchHeight({
		byRow: false
		});
});
 