let controller = new ScrollMagic.Controller()

//анимация шестеренок
//gears1
let gears = document.querySelector('.gear1')
let gearsAnimation = anime({
  targets: gears,
  rotate: '+=2turn',
  easing: 'linear',
  autoplay: false
})
let section6 = document.querySelector('#section-6')
new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)
.on('progress', e => {
  gearsAnimation.seek(gearsAnimation.duration * e.progress)
})





//gear2
let gearTwo = document.querySelector('.gear2')
let gearAnimationTwo = anime({
  targets: gearTwo,
  rotate: '+=2turn',
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})

.addTo(controller)

.on('progress', e => {
  gearAnimationTwo.seek(gearAnimationTwo.duration * e.progress)
})





//gear3
let gearThree = document.querySelector('.gear3')
let gearAnimationThree = anime({
  targets: gearThree,
  rotate: '+=2turn',
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})

.addTo(controller)

.on('progress', e => {
  gearAnimationThree.seek(gearAnimationThree.duration * e.progress)
})






//gear4
let gearFour = document.querySelector('.gear4')
let gearAnimationFour = anime({
  targets: gearFour,
  rotate: '+=2turn',
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)

.on('progress', e => {
  gearAnimationFour.seek(gearAnimationFour.duration * e.progress)
})




//gear5
let gearFive = document.querySelector('.gear5')
let gearAnimationFive = anime({
  targets: gearFive,
  rotate: '+=2turn',
  easing: 'linear',
  autoplay: false
})

new ScrollMagic.Scene({
  triggerElement: section6,
  duration: section6.getBoundingClientRect().height
})
.addTo(controller)

.on('progress', e => {
  gearAnimationFive.seek(gearAnimationFive.duration * e.progress)
})


// 
