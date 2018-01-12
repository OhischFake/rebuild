(function($){
	$(function(){
		$('.slider').slider({
			sliderToggler: false,
			autoSlide: {
				state: true,
				secs: 4500,
			},
		});


		$(document).on( "keydown", function(event) { 
			console.log(event.which);
			
			//Keydown werte WASD
			//87
			//65
			//83
			//68


			//Keypress werte WASD
			//119
			//97
			//115
			//100
			var key = '1',
					obj = {};
		});
	});
})(jQuery);