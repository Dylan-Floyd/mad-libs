const input1El = document.getElementById('input1');
const input2El = document.getElementById('input2');
const input3El = document.getElementById('input3');
const input4El = document.getElementById('input4');
const input5El = document.getElementById('input5');

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const word1El = document.getElementById('word1');
const word2El = document.getElementById('word2');
const word3El = document.getElementById('word3');
const word4El = document.getElementById('word4');
const word5El = document.getElementById('word5');

const hiddenEl = document.querySelector('#hidden');

const counterEl = document.getElementById('counter');

//state:
let counter = 0;

//events:
submitButton.addEventListener('click', () => {
    //change words
    word1El.textContent = input1El.value;
    word2El.textContent = input2El.value;
    word3El.textContent = input3El.value;
    word4El.textContent = input4El.value;
    word5El.textContent = input5El.value;
    //change visibility
    hiddenEl.style.visibility = 'visible';

});

resetButton.addEventListener('click', () => {
    //change visibility
    counter++;
    counterEl.textContent = counter;

    hiddenEl.style.visibility = 'hidden';
    input1El.value = '';
    input2El.value = '';
    input3El.value = '';
    input4El.value = '';
    input5El.value = '';
});