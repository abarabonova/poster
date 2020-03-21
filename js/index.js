// // это кружочки чтобы тыкать и они появлялись

// let div = document.createElement('div')
//
// let num = 0;
// let sectionEight = document.querySelector('.main__section__8')
//
// window.onload = function() {
//   document.getElementById('object').onclick = mouseHandler
// }
//
// function mouseHandler(evt) {
//   if (!evt) evt = window.event;
//
//   document.getElementById('object').innerHTML = document.getElementById('object').innerHTML + "<div class='tags' id='tags" + num + "'><div>";
//
//
//   document.getElementById('tags' + num).style.top = evt.offsetX + 'px'
//   document.getElementById('tags' + num).style.left = evt.offsetY + 'px'
//
//   num = num + 1;
// }
//


let prevTranslateX = 0
let sectionEight = document.getElementById('object')
sectionEight.onclick = function() {
  anime({
    targets: '.tags',
    translateX: function() {
      return prevTranslateX + anime.random(-10, 10)
    },
    translateY: function() {
      return prevTranslateX + anime.random(-10, 10)
    },
    changeComplete: function(object) {
      prevTranslateX = Number(object.animations[0].currentValue.slice(0,-10))
    }
  })
}

let box6Animation = anime({
  targets: '.tags',
  translateY: '2vw',
  translateX: '2vw',
  easing: 'linear',
  autoplay: false
})








//анимация красных фишек
let chips = document.querySelectorAll('.chip')
console.log(chips);
[...chips].forEach((item, i) => {
  let chipAnimation = anime({
    targets: item,
    rotate: [0,160],
    easing: 'linear',
    autoplay: false
  })
  item.onmouseenter = chipAnimation.play
});





//text
// let fittext = getElementById('#')
[...document.querySelectorAll('.fluid-text')].forEach((item) => {
  fitText(item, 0.8)
});






let section15 = document.querySelector('#slot-section')
let slot = (function() {

  let maxTime = 2000,
    height = 710, // высота кольца
    speeds = [],
    r = [],
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




// timeline slots

let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 150,
  loop: true
});

// Add children
tl
.add({
  targets: '#text1',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text2',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text3',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text4',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text5',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text6',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text7',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text8',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text9',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text10',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text11',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text12',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text13',
  zIndex: {
    value: [1, 3],
    round: true
}
})

.add({
  targets: '#text14',
  zIndex: {
    value: [1, 3],
    round: true
}
})












//
