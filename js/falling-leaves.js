	if(!image_urls){var image_urls=Array()}if(!flash_urls){var flash_urls=Array()}image_urls['rain1']="https://3.bp.blogspot.com/-n-XnbD1i3Z8/WPsTW3R8xdI/AAAAAAAAD7E/FHwMrQ5HMms7w1b1AKTUY31RLGmy_fgkACLcB/s1600/f1-helponblogging.png";image_urls['rain2']="https://2.bp.blogspot.com/-PoisKeBlzwY/WPsTW0T5XZI/AAAAAAAAD7A/pD0KyWfatBY-JhGTFf7zdd-h0oPuPmTZQCLcB/s1600/f2-helponblogging.png";image_urls['rain3']="https://4.bp.blogspot.com/-3-Rlq33iHvY/WPsTW9AgmKI/AAAAAAAAD7I/-0N0I2XgbYQUPIeRk6xwtJhw1AENdiW-QCLcB/s1600/f3-helponblogging.png";image_urls['rain4']="https://4.bp.blogspot.com/-jX-p-rR1y6E/WPsTYVJasNI/AAAAAAAAD7M/WqQtmzbL1x4-PLxYuT0UPgbCCxEI0EYiACLcB/s1600/f4-helponblogging.png";$(document).ready(function(){var c=$(window).width();
	
var d=$(window).height();
var e=function(a,b){
	return Math.round(a+(Math.random()*(b-a)))
	};
var f=function(a){
	setTimeout(function(){a.css({left:e(0,c)+'px',top:'-30px',display:'block',opacity:'0.'+e(10,100)}).animate({top:(d-10)+'px'},e(7500,8000),function(){$(this).fadeOut('slow',function(){f(a)})})},e(1,8000))};$('<div></div>').attr('id','rainDiv')
.css({position:'fixed',width:(c-20)+'px',height:'1px',left:'0px',top:'-5px',display:'block'}).appendTo('body');for(var i=1;i<=20;i++){var g=$('<img/>').attr('src',image_urls['rain'+e(1,4)]).css(
	{
	 position:'absolute',
	 left:e(0,c)+'px',
	 top:'-30px',
	 display:'block',
	 opacity:'0.'+e(10,100),'margin-left':0}).addClass('rainDrop').appendTo('#rainDiv');
	 f(g);g=null};var h=0;var j=0;$(window).resize(function(){c=$(window).width();d=$(window).height()})
	 });