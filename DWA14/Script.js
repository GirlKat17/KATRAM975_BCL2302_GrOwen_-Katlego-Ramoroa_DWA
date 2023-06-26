const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;
/**
 * @license
 * Copyright 2019 Google LLC
 * 
 */

const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset= document.querySelector('[data-key=reset]')

// function for substraction
const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1;
  number.value = newValue;

  
  if (add.disabled === true) {
    add.disabled = false;
  }
  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true;
  }
 console.log(newValue)
};
// function for addition

const addHandler = () => {
  const newValue = parseInt(number.value) + 1;
  number.value = newValue;

  if (subtract.disabled === true) {
    subtract.disabled = false;
  }
  if (newValue >= MAX_NUMBER) {
    add.disabled = true;
  }
  console.log(newValue)
};





subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);

// reset button

function addReset(){
    alert("Are you sure you want to reset");
number.value=0


}
reset.addEventListener('click', addReset);