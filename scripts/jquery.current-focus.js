$(document).ready(function(){
	$("input").focus(function() {
		$(this).parent().addClass("current-focus")
	});
	$("input").blur(function() {
		$(this).parent().removeClass("current-focus")
	});
});