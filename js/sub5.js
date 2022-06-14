$(document).ready(function(){

  //모바일 메뉴(햄버거)
	$(".mo_view").css({"right": "-70%"}); 
	$(".menu_off").hide();

	$(".menu_on").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "0%"});
    $(".mognb_bg").css({"display":"block"});
		$(".menu_off").show();

	});

	$(".menu_off").click(function () {
		$(".mo_view").stop(true, true).animate({"right": "-70%"});
    $(".mognb_bg").css({"display":"none"});
		$(".menu_off").hide();
	});

});