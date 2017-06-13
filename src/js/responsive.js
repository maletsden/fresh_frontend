module.exports = function(){


    $(function() {

      resize_credits();
      all_resize_ready()
      main_resize();

      $(window).resize(function () {
        resize_credits();
        all_resize_ready()
        main_resize();
      });

    });



    function resize_credits() {
        if ($(window).width() > 700) {
          $('#credits').removeClass('flex_wrap flex_direct_col flex_center').addClass('flex_between');
          $('#credits > div').removeClass();
        }else {
          $('#credits').removeClass('flex_between').addClass('flex_wrap flex_direct_col flex_center');
          $('#credits > div').addClass('flex flex_center');
        }
    }
    function all_resize_ready(){
    	$('.blog-title a').css({'font-size':$(window).width()*0.08,'margin-buttom':$(window).width()*0.017});
    	$('.blog-info').css('padding',$(window).width()*0.018);
    	$('.blog-description div').css({'font-size':$(window).width()*0.025,'margin-top':$(window).width()*0.017});
    }
    function main_resize() {
    	if ($(window).width() > 847) {
    		$(".toggle-container").addClass("hidden");
    		$("#mobile-menu").hide();
    		$(".blog-search").hide();
    	}else{
    		$(".toggle-container").removeClass("hidden");
    		$("#mobile-menu").show();
    	}
    }

};
