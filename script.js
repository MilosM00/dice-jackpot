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