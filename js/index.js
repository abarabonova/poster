(function () {
    'use strict';

    var boxElem = document.getElementById('m2');
    var pointerElem = document.getElementById('card');

    function onMouseMove(event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;
        var crd = boxElem.getBoundingClientRect();

        var activePointer = crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom;

        if (crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom) {
            if (pointerElem.classList.contains('box-pointer-hidden')) {
                pointerElem.classList.remove('box-pointer-hidden');
            }

            pointerElem.style.transform = 'translate3d(' + mouseX + 'px, ' + mouseY + 'px, 0px)';

        } else {
            pointerElem.classList.add('box-pointer-hidden');
        }
    }

    function disablePointer() {
        requestAnimationFrame(function hidePointer() {
            pointerElem.classList.add('box-pointer-hidden');
        });
    }

    boxElem.addEventListener('mousemove', onMouseMove, false);
    boxElem.addEventListener('mouseleave', disablePointer, false);

})();


// let numberOfRects = 7
// for (let i = 0; i < numberOfRects; i +=1) {
//   let div = document.createElement('div')
//
//
//   // div.style.background = div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,100)},${anime.random(0,10)})`
//   // div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
//
//   div.onmouseenter = function (e) {
//     let elStyle = e.target.style
//     console.log(e.target.style.width.slice(0, -2));
//     if (elStyle.width === elStyle.height) {
//       console.log('circle');
//     }
//   // elStyle.background =  div.style.background = `rgb(${#f7f6f7})`
//   // elStyle.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
//   }
//   document.body.append(div)
// }


let div = document.createElement('div')

div.onclick = function changeColor() {
  let a = document.getElementsByClassName('main__section__8')
  a.style.backgroundColor = "#99c2ff";
}

div.onclick = function createElements() {
  let a = document.getElementsByClassName('main__section__8')
  a.style.backgroundColor = "white"

  let circle = a.getContext("circle");
  circle.fillStyle = "#290033";
  circle.fillRect(15, 15, 100, 50);
  circle.fillRect(185, 15, 100, 50);
}





//
// div.onmouseenter = function (e) {
//     let elStyle = e.target.style
//     console.log(e.target.style.width.slice(0, -2));
//     if (elStyle.width === elStyle.height) {
//       console.log('circle');
//     }
















//
