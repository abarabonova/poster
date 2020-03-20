//это рандом бросок кубики
let section = document.querySelector('.dice')
rollDice()

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

let sectionDice = document.querySelector('#dice-2')
rollDiceTwo()

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
rollDiceThree()

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
