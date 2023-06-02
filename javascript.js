function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(!b){
        return 'undefined';
    }else{
        return a / b;
    }
}

function squared(a){
    return a * a;
}

function sqrt(a){
    return Math.pow(a, .5);
}

function reciporical(a){
    if(a){
        return 1 / a;
    }else{
        return 0;
    }
}

function percent(a){
    return a / 100;
}

let num1 = 0;
let num2 = '';
let operator;
let displayValue = 0;
let previousValue;
let isDecimal = false;
let decimalCount = 0;
let isNegative = false;

function operate(a, b, op){
    if(op == '+'){
        return add(a, b);
    }else if(op == '-'){
        return subtract(a, b);
    }else if(op == '*'){
        return multiply(a, b);
    }else if(op == '/'){
        return divide(a, b);
    }
}

function updateDisplay(){
    if(this.textContent == 'Delete'){
        num1 = Math.floor(num1 / 10);
    }else if(this.textContent == 'C'){
        num1 = 0;
        decimalCount = 0;
        isDecimal = false;
        isNegative = false;
    }else if(this.textContent == 'CE'){
        num1 = 0;
        num2 = '';
        isDecimal = false;
        decimalCount = 0;
        isNegative = false;
    }else if(this.textContent == 'x^2'){
        num1 = squared(num1);
        num2 = num1;
        num1 = 0;
    }else if(this.textContent == 'sqrt'){
        num1 = sqrt(num1);
        num2 = num1;
        num1 = 0;
    }else if(this.textContent == '1/x'){
        num1 = reciporical(num1);
        num2 = num1;
        num1 = 0;
    }else if(this.textContent == '%'){
        num1 = percent(num1);
    }else if(this.textContent == '.'){
        isDecimal = true;
    }else if(isDecimal){
        decimalCount++;
        num1 = num1 + (parseInt(this.textContent) / Math.pow(10, decimalCount));
    }else if(this.textContent == '+/-'){
        num1 = num1 * -1;
        if(isNegative){
            isNegative = false;
        }else{
            isNegative = true;
        }
    }else if(isNegative){
        num1 = num1 * 10 - parseInt(this.textContent);
    }else{
        num1 = num1 * 10 + parseInt(this.textContent);
    }
    calculatorDisplay.textContent = num1;
    previousDisplay.textContent = num2;
}

const calculatorDisplay = document.querySelector('.calculator-display');
const previousDisplay = document.querySelector('.previous-display');

const displayZero = document.querySelector('.zero');
const displayOne = document.querySelector('.one');
const displayTwo = document.querySelector('.two');
const displayThree = document.querySelector('.three');
const displayFour = document.querySelector('.four');
const displayFive = document.querySelector('.five');
const displaySix = document.querySelector('.six');
const displaySeven = document.querySelector('.seven');
const displayEight = document.querySelector('.eight');
const displayNine = document.querySelector('.nine');
const backspace = document.querySelector('.delete');
const clear = document.querySelector('.clear');
const clearAll = document.querySelector('.clear-everything');
const reciporicalVar = document.querySelector('.reciporical');
const squaredVar = document.querySelector('.squared');
const sqrtVar = document.querySelector('.sqrt');
const percentVar = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');
const negative = document.querySelector('.negative');

displayZero.addEventListener('click', updateDisplay);
displayOne.addEventListener('click', updateDisplay);
displayTwo.addEventListener('click', updateDisplay);
displayThree.addEventListener('click', updateDisplay);
displayFour.addEventListener('click', updateDisplay);
displayFive.addEventListener('click', updateDisplay);
displaySix.addEventListener('click', updateDisplay);
displaySeven.addEventListener('click', updateDisplay);
displayEight.addEventListener('click', updateDisplay);
displayNine.addEventListener('click', updateDisplay);
backspace.addEventListener('click', updateDisplay);
clear.addEventListener('click', updateDisplay);
clearAll.addEventListener('click', updateDisplay);
reciporicalVar.addEventListener('click', updateDisplay);
squaredVar.addEventListener('click', updateDisplay);
sqrtVar.addEventListener('click', updateDisplay);
percentVar.addEventListener('click', updateDisplay);
decimal.addEventListener('click', updateDisplay);
negative.addEventListener('click', updateDisplay);

// next add all the operators: divide multiply subtract add and equals