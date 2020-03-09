let controller = new ScrollMagic.Controller()







// курсор


$(document).ready(function(){

  $(document).on('mousemove',function(e){
    // selector: '(#main3)'
    // let lastSection = document.getElementById('main3')
    // let section3 = document.querySelector('#main3')
    let parentOffset = $('#main3').offset();
  	let iCount=$('.clone').length;
    let amount=$('#amountTo').val()-1;
    let pStyle={'top':e.pageY -10,'left':e.pageX - (448/2)};
    let cStyle={'top':e.pageY -10,'left':e.pageX - (448/2),'z-index':2,
     // duration: section3.getBoundingClientRect().height
   };
  $('.main').css(pStyle);



  let gg=$('.main').clone().removeClass('main').addClass('clone');

  $(gg).appendTo('#main3').css(cStyle);
    $('#amount').html(iCount);
    $('.clone').each(function(i, elee){
      if(iCount>amount){
        $(elee).remove();
      }

        iCount--;
    })
})
  $('#chords')[0].play()

  })










//
// function justNumbers(e)
//         {
//         let keynum = window.event ? window.event.keyCode : e.which;
//         if ((keynum == 8) || (keynum == 46))
//         return true;
//
//         return /\d/.test(String.fromCharCode(keynum));
//         }








// // это кружочки чтобы тыкать и они появлялись
//
// let div = document.createElement('div')
//
// div.onclick = function changeColor() {
//   let a = document.getElementsByClassName('main__section__8')
//   a.style.backgroundColor = "#99c2ff";
// }
//
// div.onclick = function createElements() {
//   let a = document.getElementsByClassName('main__section__8')
//   a.style.backgroundColor = "white"
//
//   let circle = a.getContext("circle");
//   circle.fillStyle = "#290033";
//   circle.fillRect(15, 15, 100, 50);
//   circle.fillRect(185, 15, 100, 50);
// }



//это рандом бросок кубики
let section = document.querySelector('.dice')

function rollDice() {
  let diceDot1 = document.querySelector('#dot-1');
  let diceDot2 = document.querySelector('#dot-2');
  let diceDot3 = document.querySelector('#dot-3');
  let diceDot4 = document.querySelector('#dot-4');
  let diceDot5 = document.querySelector('#dot-5');
  let diceDot6 = document.querySelector('#dot-6');
  let diceDot7 = document.querySelector('#dot-7');
  let diceDot8 = document.querySelector('#dot-8');
  let diceDot9 = document.querySelector('#dot-9');
  let diceRoll = Math.floor(Math.random() * 6) + 1;


  switch(diceRoll) {
    case 1 :
              diceDot5.classList.remove('hide');
              diceDot1.classList.add('hide');
              diceDot2.classList.add('hide');
              diceDot3.classList.add('hide');
              diceDot4.classList.add('hide');
              diceDot6.classList.add('hide');
              diceDot7.classList.add('hide');
              diceDot8.classList.add('hide');
              diceDot9.classList.add('hide');
    break;
    case 2 :
              diceDot1.classList.remove('hide');
              diceDot9.classList.remove('hide');
              diceDot2.classList.add('hide');
              diceDot3.classList.add('hide');
              diceDot4.classList.add('hide');
              diceDot5.classList.add('hide');
              diceDot6.classList.add('hide');
              diceDot7.classList.add('hide');
              diceDot8.classList.add('hide');
    break;
    case 3 :
              diceDot1.classList.remove('hide');
              diceDot5.classList.remove('hide');
              diceDot9.classList.remove('hide');
              diceDot2.classList.add('hide');
              diceDot3.classList.add('hide');
              diceDot4.classList.add('hide');
              diceDot6.classList.add('hide');
              diceDot7.classList.add('hide');
              diceDot8.classList.add('hide');
    break;
    case 4 :
              diceDot1.classList.remove('hide');
              diceDot3.classList.remove('hide');
              diceDot7.classList.remove('hide');
              diceDot9.classList.remove('hide');

              diceDot2.classList.add('hide');
              diceDot4.classList.add('hide');
              diceDot5.classList.add('hide');
              diceDot6.classList.add('hide');
              diceDot8.classList.add('hide');
    break;
    case 5 :
              diceDot1.classList.remove('hide');
              diceDot3.classList.remove('hide');
              diceDot5.classList.remove('hide');
              diceDot7.classList.remove('hide');
              diceDot9.classList.remove('hide');

              diceDot2.classList.add('hide');
              diceDot4.classList.add('hide');
              diceDot6.classList.add('hide');
              diceDot8.classList.add('hide');
    break;
    case 6 :
              diceDot1.classList.remove('hide');
              diceDot4.classList.remove('hide');
              diceDot7.classList.remove('hide');
              diceDot3.classList.remove('hide');
              diceDot6.classList.remove('hide');
              diceDot9.classList.remove('hide');
              diceDot2.classList.add('hide');
              diceDot5.classList.add('hide');
              diceDot8.classList.add('hide');
    break;
    default: document.write('ошибка');
  }
}
section.onclick = rollDice



//это рандом бросок кубики
//
let sectionDice = document.querySelector('#dice-2')

function rollDiceTwo() {
  let diceDot11 = document.querySelector('#dot1');
  let diceDot22 = document.querySelector('#dot2');
  let diceDot33 = document.querySelector('#dot3');
  let diceDot44 = document.querySelector('#dot4');
  let diceDot55 = document.querySelector('#dot5');
  let diceDot66 = document.querySelector('#dot6');
  let diceDot77 = document.querySelector('#dot7');
  let diceDot88 = document.querySelector('#dot8');
  let diceDot99 = document.querySelector('#dot9');
  let diceRollTwo = Math.floor(Math.random() * 6) + 1;


  switch(diceRollTwo) {
    case 1 :
              diceDot55.classList.remove('hide');
              diceDot11.classList.add('hide');
              diceDot22.classList.add('hide');
              diceDot33.classList.add('hide');
              diceDot44.classList.add('hide');
              diceDot66.classList.add('hide');
              diceDot77.classList.add('hide');
              diceDot88.classList.add('hide');
              diceDot99.classList.add('hide');
    break;
    case 2 :
              diceDot11.classList.remove('hide');
              diceDot99.classList.remove('hide');
              diceDot22.classList.add('hide');
              diceDot33.classList.add('hide');
              diceDot44.classList.add('hide');
              diceDot55.classList.add('hide');
              diceDot66.classList.add('hide');
              diceDot77.classList.add('hide');
              diceDot88.classList.add('hide');
    break;
    case 3 :
              diceDot11.classList.remove('hide');
              diceDot55.classList.remove('hide');
              diceDot99.classList.remove('hide');
              diceDot22.classList.add('hide');
              diceDot33.classList.add('hide');
              diceDot44.classList.add('hide');
              diceDot66.classList.add('hide');
              diceDot77.classList.add('hide');
              diceDot88.classList.add('hide');
    break;
    case 4 :
              diceDot11.classList.remove('hide');
              diceDot33.classList.remove('hide');
              diceDot77.classList.remove('hide');
              diceDot99.classList.remove('hide');

              diceDot22.classList.add('hide');
              diceDot44.classList.add('hide');
              diceDot55.classList.add('hide');
              diceDot66.classList.add('hide');
              diceDot88.classList.add('hide');
    break;
    case 5 :
              diceDot11.classList.remove('hide');
              diceDot33.classList.remove('hide');
              diceDot55.classList.remove('hide');
              diceDot77.classList.remove('hide');
              diceDot99.classList.remove('hide');

              diceDot22.classList.add('hide');
              diceDot44.classList.add('hide');
              diceDot66.classList.add('hide');
              diceDot88.classList.add('hide');
    break;
    case 6 :
              diceDot11.classList.remove('hide');
              diceDot44.classList.remove('hide');
              diceDot77.classList.remove('hide');
              diceDot33.classList.remove('hide');
              diceDot66.classList.remove('hide');
              diceDot99.classList.remove('hide');
              diceDot22.classList.add('hide');
              diceDot55.classList.add('hide');
              diceDot88.classList.add('hide');
    break;
    default: document.write('ошибка');
  }
}
sectionDice.onclick = rollDiceTwo



//третий кубик
let diceSection = document.querySelector('#dice-3')

function rollDiceThree() {
  let diceDot111 = document.querySelector('#dot11');
  let diceDot222 = document.querySelector('#dot22');
  let diceDot333 = document.querySelector('#dot33');
  let diceDot444 = document.querySelector('#dot44');
  let diceDot555 = document.querySelector('#dot55');
  let diceDot666 = document.querySelector('#dot66');
  let diceDot777 = document.querySelector('#dot77');
  let diceDot888 = document.querySelector('#dot88');
  let diceDot999 = document.querySelector('#dot99');
  let diceRollThree = Math.floor(Math.random() * 6) + 1;


  switch(diceRollThree) {
    case 1 :
              diceDot555.classList.remove('hide');
              diceDot111.classList.add('hide');
              diceDot222.classList.add('hide');
              diceDot333.classList.add('hide');
              diceDot444.classList.add('hide');
              diceDot666.classList.add('hide');
              diceDot777.classList.add('hide');
              diceDot888.classList.add('hide');
              diceDot999.classList.add('hide');
    break;
    case 2 :
              diceDot111.classList.remove('hide');
              diceDot999.classList.remove('hide');
              diceDot222.classList.add('hide');
              diceDot333.classList.add('hide');
              diceDot444.classList.add('hide');
              diceDot555.classList.add('hide');
              diceDot666.classList.add('hide');
              diceDot777.classList.add('hide');
              diceDot888.classList.add('hide');
    break;
    case 3 :
              diceDot111.classList.remove('hide');
              diceDot555.classList.remove('hide');
              diceDot999.classList.remove('hide');
              diceDot222.classList.add('hide');
              diceDot333.classList.add('hide');
              diceDot444.classList.add('hide');
              diceDot666.classList.add('hide');
              diceDot777.classList.add('hide');
              diceDot888.classList.add('hide');
    break;
    case 4 :
              diceDot111.classList.remove('hide');
              diceDot333.classList.remove('hide');
              diceDot777.classList.remove('hide');
              diceDot999.classList.remove('hide');

              diceDot222.classList.add('hide');
              diceDot444.classList.add('hide');
              diceDot555.classList.add('hide');
              diceDot666.classList.add('hide');
              diceDot888.classList.add('hide');
    break;
    case 5 :
              diceDot111.classList.remove('hide');
              diceDot333.classList.remove('hide');
              diceDot555.classList.remove('hide');
              diceDot777.classList.remove('hide');
              diceDot999.classList.remove('hide');

              diceDot222.classList.add('hide');
              diceDot444.classList.add('hide');
              diceDot666.classList.add('hide');
              diceDot888.classList.add('hide');
    break;
    case 6 :
              diceDot111.classList.remove('hide');
              diceDot444.classList.remove('hide');
              diceDot777.classList.remove('hide');
              diceDot333.classList.remove('hide');
              diceDot666.classList.remove('hide');
              diceDot999.classList.remove('hide');
              diceDot222.classList.add('hide');
              diceDot555.classList.add('hide');
              diceDot888.classList.add('hide');
    break;
    default: document.write('ошибка');
  }
}
diceSection.onclick =  rollDiceThree
// section.onmouseenter =  rollDice


//
// //18
//
// let numberOfRects = 5
// let wordsNum = 5
//
// for (let i = 0; i < numberOfRects; i += 1) {
//   let div = document.getElementById('s17')
//
//   if (anime.random(0,1) % 2 === 0) {
//     let size = `${anime.random(1,5)}vw`
//     div.style.width = size
//     div.style.height = size
//   } else {
//     div.style.width = `${anime.random(1,5)}vw`
//     div.style.height = `${anime.random(1,5)}vw`
//   }
//
//   div.style.background = getRGBcolor()
//
//
//   div.onmouseenter = function(e) {
//     let elStyle = e.target.style
//     let elWidthNum = Number(elStyle.width.slice(0,-2))
//     let elHeightNum = Number(elStyle.height.slice(0,-2))
//
//     if (elWidthNum === elHeightNum) {
//       let size = `${anime.random(1,5)}vw`
//       elStyle.width = size
//       elStyle.height = size
//     } else {
//       elStyle.width = `${anime.random(1,5)}vw`
//       elStyle.height = `${anime.random(1,5)}vw`
//     }
//
//     elStyle.background = getRGBcolor()
//   }
//
//
//   function getRGBcolor() {
//     return `rgb(${anime.random(50,255)},${anime.random(50,255)},${anime.random(50,255)})`
//   }
//
//   document.body.append(div)
// }

//ВОПРОС

//анимация красных фишек
let chip = document.querySelector('.chip')
let chipAnimation = anime({
  targets: chip,
  rotate: [0,360],
  easing: 'linear',
  autoplay: false
})

chip.onmouseenter = chipAnimation



//анимация шестеренок
//gears1
let gears = document.querySelector('.gear1')
let gearsAnimation = anime({
  targets: gears,
  rotate: [0, 360],
  easing: 'linear',
  autoplay: false
})
let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
// .setPin(gears)
.on('progress', e => {
  gearsAnimation.seek(gearsAnimation.duration * e.progress)
})

//gear2
let gearTwo = document.querySelector('.gear2')
let gearAnimationTwo = anime({
  targets: gearTwo,
  rotate: [-360, 0],
  easing: 'linear',
  autoplay: false
})
// let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
// .setPin(gears)
.on('progress', e => {
  gearAnimationTwo.seek(gearAnimationTwo.duration * e.progress)
})

//gear3
let gearThree = document.querySelector('.gear3')
let gearAnimationThree = anime({
  targets: gearThree,
  rotate: [-360, 0],
  easing: 'linear',
  autoplay: false
})
// let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
// .setPin(gears)
.on('progress', e => {
  gearAnimationThree.seek(gearAnimationThree.duration * e.progress)
})

//gear4
let gearFour = document.querySelector('.gear4')
let gearAnimationFour = anime({
  targets: gearFour,
  rotate: [-360, 0],
  easing: 'linear',
  autoplay: false
})
// let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
// .setPin(gears)
.on('progress', e => {
  gearAnimationFour.seek(gearAnimationFour.duration * e.progress)
})

//gear5
let gearFive = document.querySelector('.gear5')
let gearAnimationFive = anime({
  targets: gearFive,
  rotate: [-360, 0],
  easing: 'linear',
  autoplay: false
})
// let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
// .setPin(gears)
.on('progress', e => {
  gearAnimationFive.seek(gearAnimationFive.duration * e.progress)
})






let relativeEl = document.querySelector('#coin');

anime({
  targets: '#coin',
  translateX: {
    value: '*=2.5', // 100px * 2.5 = '250px'
    duration: 1000
  },
  width: {
    value: '-=1em', // 28 - 20 = '8px'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=4turn', // 0 + 2 = '2turn'
    duration: 1800,
    easing: 'easeInOutSine'
  },
  direction: 'alternate'
});

//text
// let fittext = getElementById('#')
[...document.querySelectorAll('.fluid-text')].forEach((item) => {
  fitText(item, 0.8)
});






let section15 = document.querySelector('#slot-section')
let slot = (function() {



  let maxTime = 2000, // time measured in milliseconds
    height = 710, // height of reels
    speeds = [], // reel arry speed
    r = [], // reel arry values
    reelArry = [
      [' ⃟ ', '◯', '7','7', '◯', '7'],
      ['◯', '7', ' ⃟ '],
      ['7', ' ⃟ ', '◯', '7', ' ⃟ ']
    ],
    slotReels, txt, begin

  function init() {
    slotReels = document.querySelectorAll('.slots__reel');
    for (i = 0; i < slotReels.length; i++) {
      slotReels[i].innerHTML = '<ul class="items"><li>' + reelArry[i].join('</li><li>') + '</li></ul><ul class="items"><li>' + reelArry[i].join('</li><li>') + '</li></ul>'
    }


    document.querySelector('#slot-section').addEventListener('click', daMagic);
  }

  function daMagic() {
    if (begin !== undefined) {
      return
    }

    for (let i = 0; i < 3; ++i) {
      speeds[i] = Math.random() + .5
      r[i] = (Math.random() * 3 | 0) * height / 3;
    }
    animate()
  }

  function animate(now) {
    if (!begin) {
      begin = now
    }

    let t = now - begin || 0

    for (let i = 0; i < 3; ++i) {
      slotReels[i].scrollTop = (speeds[i] / maxTime / 2 * (maxTime - t) * (maxTime - t) + r[i]) % height | 0
      // console.log(slotReels[i]);
    }

    if (t < maxTime) {
      requestAnimationFrame(animate) // animate callback
      // console.log('animate?')
    } else {
      begin = undefined
      // checkWinner()
      // console.log('check')
    }

  }


  return {
    init: init
  }

})();

slot.init();

section15.onclick = slot





//




//
