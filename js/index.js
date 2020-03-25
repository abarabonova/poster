//это кружочки чтобы тыкать и они появлялись

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


// зеленые шарики
let coins = document.querySelectorAll('.coin');

console.log(coins);
[...coins].forEach((item, i) => {
  let coinsAnimation = anime({
    targets: item,
    scale: -1,
    easing: 'linear',
    autoplay: false
  })
  item.onmouseenter = coinsAnimation.play
});




//text
// let fittext = getElementById('#')
[...document.querySelectorAll('.fluid-text')].forEach((item) => {
  fitText(item, 0.8)
});




// слот

let section15 = document.querySelector('#slot-section')
let slot = (function() {

  let maxTime = 2000,
    height = 710, // высота кольца
    speeds = [],
    r = [],
    reelArry = [
      [' ⃟ ', '◯', '7','7', '◯', '7'],
      ['◯', '7', ' ⃟ ', '◯', '7',' ⃟ '],
      ['7', ' ⃟ ', '◯', '7', ' ⃟ ','◯']
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


// timeline scale
let scale = anime.timeline({
  easing: 'easeInBack',
  duration: 1000,
  loop: true
})

scale
.add({
  targets: '.main__section__7__div1',
  scale: 140
})

.add({
  targets: '.main__section__7__div2',
  scale: 140
})




// timeline slots

let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 150,
  loop: true
})

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


// ..вертикальные полоски
let strips = document.querySelector('.main__section__5')
let animeStrips = anime({
  targets: '.main__section__5__div',
  height: '-80px',
  autoplay: false,
  duration: 2000,
  direction: 'alternate'
})

strips.onmouseenter = animeStrips.play


//
