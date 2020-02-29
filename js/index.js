// // // let cards = document.querySelector('#card')
// // // let context = card.getContext
// // //
// // // function update() {
// // //   context.beginPath()
// // //   context.arc(mouseX, mouseY, 50, 0, 2 * Math.PI, true)
// // //   context.fillStyle = "#FF6A6A"
// // //   context.fill()
// // //
// // //   requestAnimationFrame(update);
// // // }
// // // update()
// // //
// // //
// // // function getPosition(el) {
// // //   var xPosition = 0;
// // //   var yPosition = 0;
// // //
// // //   while (el) {
// // //     xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
// // //     yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
// // //     el = el.offsetParent;
// // //   }
// // //   return {
// // //     x: xPosition,
// // //     y: yPosition
// // //   };
// // // }
// // // var cardsPos = getPosition(cards);
// // // var mouseX = 0;
// // // var mouseY = 0;
// // //
// // // cards.addEventListener("mousemove", setMousePosition, false);
// // //
// // // function setMousePosition(e) {
// // //   mouseX = e.clientX - cardsPos.x;
// // //   mouseY = e.clientY - cardsPos.y;
// // // }
// //
// //
// // var dibujo, lienzo;
// // function inicio()
// // {
// //
// //  dibujo = document.getElementById('#card');
// //  lienzo = dibujo.getContext('2d');
// //
// //  dibujarGrilla(lienzo);
// //
// //  lienzo.moveTo(0,0);
// //  lienzo.lineTo(300,1);
// //  lienzo.lineTo(300,300);
// //  lienzo.lineTo(1,300);
// //  lienzo.lineTo(0,0);
// //  lienzo.strokeStyle = '#f00';
// //  lienzo.stroke();
// //
// //  lienzo.beginPath();
// //  lienzo.strokeStyle = '#00f';
// //  lienzo.arc(150,150,100,(Math.PI * 2),false);
// //  lienzo.closePath();
// //  lienzo.stroke();
// //
// // }
//
// console.clear()
//
// class CustomCursor {
// 	constructor(cursor, target) {
// 		this.cursor = cursor;
// 		this.circle = this.cursor.querySelector('.card')
// 		this.target = target;
// 		this.state = {
// 			isDown: false
// 		}
// 	}
// 	getBounds() {
// 		const { width, height } = this.cursor.getBoundingClientRect()
// 		return { width, height }
// 	}
// 	init() {
// 		this.initEvents()
// 	}
// 	initEvents() {
// 		this.target.addEventListener('mousedown', e => this.mouseDown(e))
// 		this.target.addEventListener('mouseup', e => this.mouseUp(e))
// 		this.target.addEventListener('mousemove', e => this.mouseMove(e))
//
// 	}
// 	handleProgress() {
//
// 	}
// 	mouseDown(e) {
// 		this.state.isDown = true;
// 		console.log(this.state.isDown)
// 		TweenMax.to(this.cursor, .5, {
// 			transformOrigin: 'center',
// 			scale: .3
// 		})
// 		TweenMax.to(this.circle, .3, {
// 			scale: 1
// 		})
// 		TweenMax.to(this.text, .5, {
// 			autoAlpha: 0
// 		})
//
// 	}
// 	mouseUp() {
// 		this.state.isDown = false;
// 		console.log(this.state.isDown)
//
// 		// animate
// 		TweenMax.to(this.cursor, 1, {
// 			scale: 1,
// 			ease: Elastic.easeInOut
// 		})
// 		TweenMax.to(this.circle, .3, {
// 			scale: 0
// 		})
// 		TweenMax.to(this.text, .5, {
// 			autoAlpha: 1
// 		})
// 	}
// 	mouseMove(e) {
// 		const { clientX, clientY } = e;
// 		const { width, height } = this.getBounds()
//
// 		TweenMax.to(this.cursor, .5, {
// 			x: clientX - width / 2,
// 			y: clientY - height / 2
// 		})
//
// 	}
//
// }
//
// const cursor = document.querySelector('.cursor')
// const custom = new CustomCursor(cursor, window)
//
// custom.init()



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












//
