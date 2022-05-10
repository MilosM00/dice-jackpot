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
    if(inputRequestDiamonds.value > 0 && inputRequestDiamonds.value < 1000){
        setTimeout(() => {
            yourDiamonds.textContent = Number(yourDiamonds.textContent) + Number(inputRequestDiamonds.value);

            inputRequestDiamonds.value = ``;
        }, 1000);
    }
    
    else{
        alert(`You can request the number of diamonds between 1 and 999!`);
        inputRequestDiamonds.value = ``;
        inputRequestDiamonds.focus();
    }
});

buttonRollDice.addEventListener(`click`, () =>{
    if(radioOne.checked === true || radioTwo.checked === true || radioThree.checked === true){
        if(inputDiamonds.value > 0 && inputDiamonds.value < 1000){
            if(Number(yourDiamonds.textContent) < inputDiamonds.value){
                alert(`You do not have enough diamonds to do that!`);
            }
            
            else{
                setTimeout(() => {
                    
                    diceOne.textContent = Math.trunc(Math.random() * 6) + 1;
                    diceTwo.textContent = Math.trunc(Math.random() * 6) + 1;
        
                    x = Number(diceOne.textContent) + Number(diceTwo.textContent);
                    
                    if(radioOne.checked === true){
                        radioOneTrue();
                    }
                    
                    else if(radioTwo.checked === true){
                        radioTwoTrue();
                    }
                    
                    else if(radioThree.checked === true){
                        radioThreeTrue();
                    }
                    
                }, 1000);
            }
        }

        else{
            alert(`You need to choose the number of diamonds between 1 and 999!`);
        }
    }

    else{
        alert(`You need to choose option to bet!`);
    }
});





const radioOneTrue = () =>{
    if(x >= 2 && x <= 6){
        displayJackpotInfo.style.backgroundColor = `#1CAC78`;
        jackpotInfo.textContent = `You Win!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) + Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }

    if(x === 7){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
    
    if(x >= 8 && x <= 12){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
};

const radioTwoTrue = () =>{
    if(x >= 2 && x <= 6){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }

    if(x === 7){
        displayJackpotInfo.style.backgroundColor = `#1CAC78`;
        jackpotInfo.textContent = `You Win!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) + Number(inputDiamonds.value) + Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
    
    if(x >= 8 && x <= 12){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
};

const radioThreeTrue = () =>{
    if(x >= 2 && x <= 6){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }

    if(x === 7){
        displayJackpotInfo.style.backgroundColor = `#E52B50`;
        jackpotInfo.textContent = `Better luck next time!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) - Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
    
    if(x >= 8 && x <= 12){
        displayJackpotInfo.style.backgroundColor = `#1CAC78`;
        jackpotInfo.textContent = `You Win!`;

        yourDiamonds.textContent = Number(yourDiamonds.textContent) + Number(inputDiamonds.value);

        setTimeout(() => {
            displayJackpotInfo.style.backgroundColor = `transparent`;
            jackpotInfo.textContent = `jackpot`;
        }, 1500);
    }
};