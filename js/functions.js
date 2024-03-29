$( document ).ready(function() {
	$('.whatwedo__slider').slick({
		slidesToShow: 3,
		autoPlay: true,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_blue" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_blue" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
	});
	$('.consumers__slider').slick({
		slidesToShow: 5,
		arrows: false,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		}
			],
	});
	$(function(){
		$('#bgndVideo').YTPlayer({
			showControls: 0,
		});
	});
	$('.big-manufacture__slider').slick({
		slidesToShow: 3,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
	});
		$('.blog__slider').slick({
		slidesToShow: 3,
		rows: 0,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
	});
		$('.process__slider').slick({
		slidesToShow: 3,
		rows: 0,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
	});
		$('.types__slider').slick({
		slidesToShow: 3,
		rows: 0,
		prevArrow: '<svg class="slick-prev" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" d="M9.07091 1.3207L1.99983 8.39177M1.99983 8.39177L28.7839 8.39236M1.99983 8.39177L9.0709 15.4628" stroke="#0F1330" opacity="0.5" stroke-width="1.5"></svg>',
		nextArrow: '<svg class="slick-next" width="29" height="16" viewBox="0 0 29 16" xmlns="http://www.w3.org/2000/svg"><path class="arrow-hover_black" opacity="0.5" d="M19.713 1.3207L26.7841 8.39177M26.7841 8.39177L-1.3154e-07 8.39236M26.7841 8.39177L19.713 15.4628" stroke="#0F1330" stroke-width="1.5"/></svg>',
	});
	$('.video__card').matchHeight();
	$('.power___card').matchHeight({
		byRow: false
		});
	
	$('.tz-not__card').matchHeight();
	$('.tz-not__card__title').matchHeight();

	$(window).width() < 576 ? $('.header__menu').appendTo('.burger-menu') : false;
	$('.burger-button').click(function() {
		$('.burger-menu,.burger-button').toggleClass('active')
	});
});