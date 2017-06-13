module.exports = function(){




	var menu_array=['main','wedding_flowers','bouquets','flower_composition','contacts',];

	$(function() {


		// Toggle mobile-menu
		$(".nav-toggle").on("click", function(){
			$(this).toggleClass("active");
			$(".mobile-menu").slideToggle();
			if ($(".search-toggle").hasClass("active")) {
				$(".search-toggle").removeClass("active");
				$(".blog-search").slideToggle();
			}
		});

		// Toggle search form
		$(".search-toggle").on("click", function(){
			$(this).toggleClass("active");
			$(".blog-search").slideToggle();
			if ($(".nav-toggle").hasClass("active")) {
				$(".nav-toggle").removeClass("active");
				$(".mobile-menu").slideToggle();
			}
		});


		// Show mobile-menu > 847
		$(window).resize(function() {

		});


		// Cool header image scroll
		$(window).scroll(function(e){
			if ($(window).width() > 800) {
				$('.header').css({
					'bottom' : -($(this).scrollTop()/3)+"px",
				});
				var thisdist = $(this).scrollTop();
				var headerheight = $(".header").outerHeight();
				$('.blog-info').css({
					'opacity' : (1 - thisdist/headerheight)
				});
			} else {
				$('.header').css({'bottom' : 'auto'});
				$('.blog-info').css({'opacity' : "1" });
			}
		});

	/*
		// resize videos after container
		var vidSelector = ".post iframe, .post object, .post video, .widget-content iframe, .widget-content object, .widget-content iframe";
		var resizeVideo = function(sSel) {
			$( sSel ).each(function() {
				var $video = $(this),
					$container = $video.parent(),
					iTargetWidth = $container.width();

				if ( !$video.attr("data-origwidth") ) {
					$video.attr("data-origwidth", $video.attr("width"));
					$video.attr("data-origheight", $video.attr("height"));
				}

				var ratio = iTargetWidth / $video.attr("data-origwidth");

				$video.css("width", iTargetWidth + "px");
				$video.css("height", ( $video.attr("data-origheight") * ratio ) + "px");
			});
		};

		resizeVideo(vidSelector);

		$(window).resize(function() {
			resizeVideo(vidSelector);
		});
	*/
		// Smooth scroll to header
	    $('.tothetop').click(function(){
				$('html,body').animate({scrollTop: 0}, 500);
				$(this).unbind("mouseenter mouseleave");
		        return false;
	    });

			//menu div(click) AJAX
	    	$('.blog-menu li a,.mobile-menu li a,.blog-title a').click(function(){
	    		if($(this).attr('href')!=menu_item){
	    			menu_item=$(this).attr('href');
						container_ajax(menu_item);	//load content
	    		}
	        return false;
	    	});
	    	var menu_item=menu_array[1];
				container_ajax(menu_item);	//load content



				resize_credits();
				all_resize_ready()
				main_resize();


				$(window).resize(function () {
					resize_credits();
					all_resize_ready()
					main_resize();
	    	});



	/*

			$(window).scroll(function() {
				if ($('.navbar').hasClass('affix')){
					$('#container').css('margin-top',100+$('.navbar').height() + 'px');
				}else{
					$('#container').css('margin-top',100 + 'px');
				}
			});
	*/
	console.log(2);

	});

function container_ajax(menu_item) {
	$.ajax({
		url: 'pages/'+menu_item+'.php',
		method:'GET',
		success: function(data){
			$('#container').html(data);
			if (menu_item==menu_array[0]) {
				pages_min.main();
			}
			if (menu_item==menu_array[1]) {
				pages_min.wedding_flowers();
			}
			if (menu_item==menu_array[2]) {
				pages_min.bouquets();
			}
			if (menu_item==menu_array[3]) {
				pages_min.flower_composition();
			}
			if (menu_item==menu_array[4]) {
				pages_min.contacts();
			}
		}
	});
}
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
