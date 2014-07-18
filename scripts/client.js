$(document).ready(function () {
	$('.dropdown-mouseover').mouseover(function () {
		$('.dropdown').addClass("open");
	});
	$('.dropdown-mouseover').mouseleave(function () {
		$('.dropdown').removeClass("open");
	});
});