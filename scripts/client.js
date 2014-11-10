$(document).ready(function () {
	$('.dropdown-mouseover').mouseover(function () {
		$('.dropdown').addClass("open");
	});
	$('.dropdown-mouseover').mouseleave(function () {
		$('.dropdown').removeClass("open");
	});
	setTimeout(function() {
		$('#carousel-front-page > a.left.carousel-control.vt-p > span').trigger('click');
		alert('click');
	}, 2000);
});