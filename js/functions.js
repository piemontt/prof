$( document ).ready(function() {
	$('.bgndVideo').matchHeight();
	console.log('success')
	jQuery(function(){
		jQuery("#backvid").YTPlayer({
			showControls: 0,
		});
	});
});
