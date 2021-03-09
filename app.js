import "./components/card.js";
import "./components/historial.js";
import "./components/historial-weeks.js";


let randomSaving = document.querySelector('saving');
let result = document.querySelector('button');

let savingsNumbers = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 410, 440, 470, 500, 530, 560, 590, 620, 650, 680, 710, 240, 770];
let weeks = [1, 2, 26];

function getRandomNumber(min, max) {
         let step1 = max - min + 1;
         let step2 = Math.random() * step1;
         let result = Math.floor(step2) + min;         
        return result;
}

result.addEventListener('click', () => {
    let index = getRandomNumber(0,savingsNumbers.length-1);
    result.innerText = savingsNumbers[index];
});
