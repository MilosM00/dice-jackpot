"use strict";


const yourDiamonds = document.querySelector(`.diamond`);
const displayJackpotInfo = document.querySelector(`.display-one`);
const jackpotInfo = document.querySelector(`.jackpot-info`);
const radioOne = document.querySelector(`.radio-2-6`);
const radioTwo = document.querySelector(`.radio-7`);
const radioThree = document.querySelector(`.radio-8-12`);
const diceOne = document.querySelector(`.dice-one`);
const diceTwo = document.querySelector(`.dice-two`);
const inputDiamonds = document.querySelector(`.input-number`);
const inputRequestDiamonds = document.querySelector(`.input-request`);
const buttonRollDice = document.querySelector(`.roll-dice`);
const buttonRequestDiamonds = document.querySelector(`.request-diamond`);


let x;

radioOne.addEventListener(`click`, () =>{
    radioTwo.checked = false;
    radioThree.checked = false;
});

radioTwo.addEventListener(`click`, () =>{
    radioOne.checked = false;
    radioThree.checked = false;
});

radioThree.addEventListener(`click`, () =>{
    radioOne.checked = false;
    radioTwo.checked = false;
});

buttonRequestDiamonds.addEventListener(`click`, () =>{
    setTimeout(() => {
        


    }, 1000);
});

buttonRollDice.addEventListener(`click`, () =>{
    setTimeout(() => {
        
        diceOne.textContent = Math.trunc(Math.random() * 6) + 1;
        diceTwo.textContent = Math.trunc(Math.random() * 6) + 1;

        x = Number(diceOne.textContent) + Number(diceTwo.textContent);
        
        if(x >= 2 && x <= 6){
            
        }

        if(x === 7){

        }

        if(x >= 8 && x <= 12){

        }

    }, 1000);
});