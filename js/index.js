let controller = new ScrollMagic.Controller()
// // это курсор
//
// (function () {
//     'use strict';
//
//     var boxElem = document.getElementById('m2');
//     var pointerElem = document.getElementById('card');
//
//     function onMouseMove(event) {
//         var mouseX = event.pageX;
//         var mouseY = event.pageY;
//         var crd = boxElem.getBoundingClientRect();
//
//         var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;
//
//         if (crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom) {
//             if (pointerElem.classList.contains('box-pointer-hidden')) {
//                 pointerElem.classList.remove('box-pointer-hidden');
//             }
//
//             pointerElem.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';
//
//         } else {
//             pointerElem.classList.add('box-pointer-hidden');
//         }
//     }
//
//     function disablePointer() {
//         requestAnimationFrame(function hidePointer() {
//             pointerElem.classList.add('box-pointer-hidden');
//         });
//     }
//
//     boxElem.addEventListener('mousemove', onMouseMove, false);
//     boxElem.addEventListener('mouseleave', disablePointer, false);
//
// })();
//
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

let section = document.querySelector('#m11')

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
section.onclick =  rollDice

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
//
//

// let gears = document.querySelector('#gears')
// let gearsAnimation = anime({
//   targets: gears,
//   rotate: [0, 360],
//   duration: 50000,
//   autoplay: false
// })
// // triggerHook:
// //   'onEnter' (1), 'onCenter' (0.5), 'onLeave' (0)
// //   или числом от 1 до 0
// new ScrollMagic.Scene({
//   triggerElement: gears
// })
// .addTo(controller)
// .on('enter', () => gearsAnimation.play())
//

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

let gearsTwo = document.querySelector('.gear2')
let gearsAnimationTwo = anime({
  targets: gears,
  rotate: [0, 360],
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
  gearsAnimationTwo.seek(gearsAnimationTwo.duration * e.progress)
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


// let fittext = getElementById('#')
[...document.querySelectorAll('.fluid-text')].forEach((item) => {
  fitText(item, 0.8)
});


//
