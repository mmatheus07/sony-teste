$(document).ready(function(){

  $(window).on('resize', function(){
    var w = $(this).width();
    if(w <= 971){
      buildMobileSlider();
    } else {
      buildDesktopSlider();
    }
  }).trigger('resize');


  var slider;

  function buildMobileSlider(){
    destroySlider();
    $('#bx-pager').hide();
    slider = $('.bxslider').bxSlider();
    // console.log("mobile")
  }

  function buildDesktopSlider(){
    destroySlider();
    $('#bx-pager').show();
    slider = $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager'
    });
    // console.log("desktop")
  }

  function destroySlider(){
    if(slider){
      // console.log('destruindo');
      slider.destroySlider();
    }
  }

  /* OPCOES DE COR */
  $('.opcoes-de-cor img').on('click', function(){
    var cor = $(this).attr('data-cor');
    trocaCor(cor);
  });

  function trocaCor(cor){

    $('[data-cor='+cor+']').addClass('focused')
      .siblings().removeClass('focused');;

    $('[data-celular]').each(function(){
      var pasta = "img/celular/" + cor + "/";
      var arquivo = $(this).attr('data-celular');
      $(this).attr('src', pasta + arquivo);
    });
  }

  trocaCor('branco');
});
