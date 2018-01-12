$(function(){


		    //Zweite Bedingung das "resize" nicht dauerhaft abgefeuert wird
    var $w_state_small = null;
    var $w_state_big = null;
    var $w_state_mobile = null;


    function resize() {
      // var $window_width =  $(this).width();
      var $window_width =  $(this).outerWidth();

      //console.log($window_width);

       if($window_width <= 360 && $w_state_small != "360"){
         $w_state_small = "360";
       }
       if($window_width > 360 && $window_width <= 480 && $w_state_small != "360-480"){
         $w_state_small = "360-480";
       }
       if($window_width > 480 && $window_width <= 540 && $w_state_small != "480-540"){
         $w_state_small = "480-480";
       }
       if($window_width > 540 && $window_width <= 680 && $w_state_small != "540-680"){
         $w_state_small = "540-680";
       }

      //Detail an Car Box
      if($window_width <= 850 && $w_state_mobile != "0-850"){


        $w_state_mobile = "0-850";
        $w_state_big = "x";
      }
      

      //Detail an Car Box
      if($window_width <= 1370 && $window_width >= 850 && $w_state_mobile != "850-1370"){


        $w_state_mobile = "850-1370";
        $w_state_big = "x";
      }



      //Filter zurück ins aside schieben
      if($window_width > 1370 && $w_state_big !="1370") {
        $w_state_big = "1370";
       
        //Mobile ausblenden
        $w_state_mobile = "x";
      }


    }
  	//Mobile Navigation und Radar
  	$(window).resize(resize);
    resize();


});