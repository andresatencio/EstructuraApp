$(function() {
	FastClick.attach(document.body);
	//alert('Hola mundo')
	$.ajax({cache:false});
	$.mobile.transitionFallbacks.slideout = "none";
	$.mobile.defaultDialogTransition = "none";
	$.mobile.defaultPageTransition = "none";
	$.support.cors = true;
	$('#botonaso').click(function(){
		alert('Con');
	});
	$('#botoncito').click(function(){
		alert('Sin');
	});
})
