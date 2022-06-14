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

	 /* tabmenu */
 
	 $(".panel>li:not(:first)").hide();
	 //첫번째를 제외한 나머지 내용
 
	 $(".tab>li a").click(function(){
		 $(".tab>li a").removeClass("tab_active"); //기존선택된 selected 클래스 삭제
		 $(this).addClass("tab_active"); //새로 선택된 selected 클래스 생성
		 $(".panel>li").hide(); //기존의 보여진 내용 숨기기
		 $($(this).attr("href")).stop(true,true).show(); //새로 선택된 내용 href 연결된 내용 보여주기
 
 
	 });

});