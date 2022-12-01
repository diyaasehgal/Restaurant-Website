$(document).ready(function(){

	 $('.div_1').slideDown(1000 , function(){
	 	$('.Section').fadeIn(500);
	 	$('.wrapper').fadeIn(500);
	 	$('.btn_1').fadeIn(500);
	 });
	 
	$('.btn_1').click(function(){
	 	$('.div_1').slideUp(1000);
	 	$('.Box').fadeIn(2000);
	 	$('.wrapper').fadeOut(1500);
	 });

	var click = 1;
	
	$('.btn').click(function(){

		var images = ["url('sweet-potato.jpg')","url('no-bake.jpg')","url('20.jpg')","url('seared-scallops.jpg')","url('Soft-Pretzel.jpg')","('')"],
	 		title = ["Sweet Potato Crostini with Prosciutto Honey Roasted Figs" , "No Bake Jalapeno Popper Cheese Balls" , "hot-smoked Diavalo Seafood","Seared Scallops","Soft Pretzel Bites "],
	 		main_course = ["1 Sweet Potato -small" , " Jalapeno Popper Cheese Balls" , "2 Fried Fish","Seared Scallops With Brown Butter and Lemon Pan Sauce","Sweet crispy waffel balls"],
	 		content_1 = ["Honey Roasted Figs-small","1 salad","2 toasted buns","Caramel Cupcake"],
	 		content_2 = ["1 pepsi","1 Coconut Lemonade","Sweet Tea","1 Shake"],
	 		content_3 = ["1 salad","1 Veg Soup","2 cheese sandwiches","Garlic Bread"],
	 		price = ["Rs.310" , "Rs.340 " , "Rs.430","Rs.380","Rs.270"];

	 	if (click > images.length-2  ) {
	 		click = 0;
	 	}
		
		$('.image').css('background-image', images[click]);
		$('.title').html(title[click]);
		$('.main').html(main_course[click]);
		$('.content_1').html(content_1[click]);
		$('.content_2').html(content_2[click]);
		$('.content_3').html(content_3[click]);
		$('.price').html(price[click]);
	
		click++;
	});	
});


