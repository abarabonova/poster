// курсор
//

$(document).ready(function(){

  $(document).on('mousemove',function(e){
    let parentOffset = $('#main3').offset();
  	let cardsNumber = $('.clone').length;
    let amount = 40;
    let pStyle = {
      'top': e.pageY,
      'left': e.pageX - 750
    };
    let cStyle={
      'top' : e.pageY,
      'left' : e.pageX - 750,
      'z-index' : 2,
   };
  $('.main__section__3__card').css(pStyle);



  let gg=$('.main__section__3__card').clone().removeClass('main__section__3__card').addClass('clone');

  $(gg).appendTo('#main3').css(cStyle);
    $('#amount').html(cardsNumber);
    $('.clone').each(function(i, elee){
      // if(cardsNumber > 40){
      //   $(elee).remove();
      // }

        cardsNumber--;
    })
})
  $('#chords')[0].play()

  })
