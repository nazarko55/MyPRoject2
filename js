$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();




		/*Fixed header*/
	CheckScroll(scrollOffset);

	$(window).on("scroll", function() 
	{
	scrollOffset = $(this).scrollTop();
	CheckScroll(scrollOffset);
	});

	function CheckScroll(scrollOffset){
		scrollOffset = $(this).scrollTop();

	if(scrollOffset >= introH) 
	{
		header.addClass("fixed");
	}
	else
	{
		header.removeClass("fixed");
	}
	}
	 /*Smooth scrool*/
	 $("[data-scroll]").on("click", function(event) {
	 	event.preventDefault();

	 	var $this = $(this),
	 	blockId = $this.data('scroll'),
	 	blockOffSet = $(blockId).offset().top;

	 	$("nav a").removeClass("active");
	 	$this.addClass("active");

	 	$("html, body").animate({
	 			scrollTop:blockOffSet
	 	}, 500);
	 });

	 /*Munu nav toggle*/

	 $("#nav_toggle").on("click", function(event) {
	 	event.preventDefault();

	 	$(this).toggleClass("active");
	 	$("#nav").toggleClass("active");
	 });


	 /*Collapse*/
	 $("[data-collapse]").on("click", function(event) {
	 	event.preventDefault();

	 	var $this = $(this),
	 	blockId = $this.data('collapse');


	 	$this.toggleClass("active");
	 	$(blockId).slideToggle();
	 });


	 /*Slider*/

	 $("[data-slider]").slick({
	 	infinite: true,
	 	fade:false,
	 	slidesToShow: 1,
  		slidesToScroll: 1
	 });




});
