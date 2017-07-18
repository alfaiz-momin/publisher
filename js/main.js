$(document).ready(function(){
		$(".section1-img").hide();
		$(".section2-img").hide();
		$(".section3-img").hide();
    	$(".section4-img").hide();
    	$(".section5-img").hide();
	$(window).scroll(function(){

	var y= $(this).scrollTop();

	if (y<1000) {
		$(".section1-img").fadeIn(2000);
		}
	else if (y<1400) {
		$(".section2-img").fadeIn(2000);
	}
	else if (y<2400) {
		$(".section3-img").fadeIn(2500);
	}
	else if (y<3300) {
		$(".section4-img").fadeIn(2000);
	}
	else if (y<4000) {
		$(".section5-img").fadeIn(2000);
	}
	else{
		console.log("animation not working");
	}

	});//fade animation END

//coun Up animation start
  var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
	};
var count1 = new CountUp("section2-count", 0, 2392689, 0, 2, options);
count1.start();



});