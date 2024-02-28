$( document ).ready(function() {
	$('.video__card').matchHeight();
	console.log('success')
	jQuery(function(){
		jQuery("#bgndVideo").YTPlayer({
			showControls: 0,
		});
	});
});
