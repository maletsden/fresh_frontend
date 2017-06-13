module.exports = function(){
$(function() {
all();
//$('.affix').height($('.affix a').height());
//$('.affix-top').;
$( "#blog-menu").on(function(){
  console.log(1);

});
  $(window).resize(function() {
    all();
  });
  $(window).scroll(function() {
    $( "#blog-menu a" ).toggleClass(function() {
      if ($("#container" ).css('padding-top')=='156px') {
        return "pad5_15";
      }
      if ($("#container" ).css('padding-top')=='100px') {
        console.log(' - else');
        return "pad20_15";
      }
    });

  });

  $('a').click(function() {
    return false;
  });
});

function all() {
  var it=$('.content_img > div').length;
  var con=it % 3;
  if (con == 0){
  var n=it / 3;
    for(var i=0; i<n; i++){
      content_img_align(i);
    }
  } else {
    var n=it / 3 ;
    var n1=Math.round(n);
    if(n1<n){n1++;}
    for(var i=0; i<n1; i++){
      content_img_align(i);
    }
  }
  $('.ih-item,.progressive').height($('.ih-item').width()/1.4);

}

function content_img_align(i) {
  if ($(window).width()>=992) {
      $('.content_img > div > div').css('width','80%');
      $('.content_img > div:eq('+ (3*i) +')').removeClass('flex_right flex_center');
      $('.content_img > div:eq('+ (1+ (3*i)) +')').removeClass('flex_right flex_center').addClass('flex_center');
      $('.content_img > div:eq('+ (2+ (3*i)) +')').removeClass('flex_right flex_center').addClass('flex_right');
    }
  if ($(window).width()>=768 && $(window).width()<992) {
    $('.content_img > div > div').css('width','80%');
    $('.content_img > div:even').removeClass('flex_right flex_center');
    $('.content_img > div:odd').removeClass('flex_right flex_center').addClass('flex_right');
  }
  if ($(window).width()>=500 && $(window).width()<768) {
    $('.content_img > div > div').css('width','80%');
    $('.content_img > div').removeClass('col-xs-12').addClass('col-xs-6');
    $('.content_img > div:even').removeClass('flex_right flex_center');
    $('.content_img > div:odd').removeClass('flex_right flex_center').addClass('flex_right');
  }
  if ($(window).width()<500) {
    $('.content_img > div > div').css('width','100%');
    $('.content_img > div').removeClass('col-xs-6').addClass('col-xs-12');
    $('.content_img > div').removeClass('flex_right flex_center');
  }


}
};
