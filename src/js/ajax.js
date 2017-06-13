module.exports = function(){

    var menu_array=['main','wedding_flowers','bouquets','flower_composition','contacts',];

    $(function() {
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


    });


    function container_ajax(menu_item) {
    	$.ajax({
    		url: 'pages/' + menu_item + '.php',
    		method:'GET',
    		success: function(data){
    			$('#container').html(data);
    			if (menu_item==menu_array[0]) {
    				pages.main();
    			}
    			if (menu_item==menu_array[1]) {
    				pages.wedding_flowers();
    			}
    			if (menu_item==menu_array[2]) {
    				pages.bouquets();
    			}
    			if (menu_item==menu_array[3]) {
    				pages.flower_composition();
    			}
    			if (menu_item==menu_array[4]) {
    				pages.contacts();
    			}
    		}
    	});
    }

};
