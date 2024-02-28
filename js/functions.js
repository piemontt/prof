$( document ).ready(function() {
	$('.video__card').matchHeight();
	console.log('success')
	jQuery(function(){
		jQuery("#backvid").YTPlayer({
			showControls: 0,
		});
	});
});
