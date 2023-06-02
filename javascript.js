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
let num3 = 0;
let operator;
let displayValue = '';
let previousValue;
let isDecimal = false;
let decimalCount = 0;
let isNegative = false;
let firstDecimal = true;

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
        num3 = 0;
        decimalCount = 0;
        isDecimal = false;
        isNegative = false;
    }else if(this.textContent == 'CE'){
        num1 = 0;
        num2 = '';
        num3 = 0;
        operator = '';
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
    displayUpdate();
}

function operatorUpdate(){
    if(!operator){
        operator = this.textContent;
        num3 = num1;
        num1 = 0;
    }else if(this.textContent == '='){
        num2 = operate(num3, num1, operator);
        num3 = 0;
        num1 = 0;
        operator = '';
    }else{
        num3 = operate(num3, num1, operator);
        num1 = 0;
        operator = this.textContent;
    }
    firstDecimal = true;
    isDecimal = false;
    decimalCount = 0;
    displayUpdate();
}

function displayUpdate(){
    if(operator){
        displayValue = num3 + ' ' + operator + ' ' + num1;
    }else if(isDecimal && firstDecimal){
        firstDecimal = false;
        displayValue = num1 + '.';  
    }else{
        displayValue = num1;
    }
    calculatorDisplay.textContent = displayValue;
    previousDisplay.textContent = num2;
}

const calculatorDisplay = document.querySelector('.calculator-display');
const previousDisplay = document.querySelector('.previous-display');

const displayNumber = document.querySelectorAll('.display-number');

displayNumber.forEach(number => number.addEventListener('click', updateDisplay));

const displayOperator = document.querySelectorAll('.operator');

displayOperator.forEach(number => number.addEventListener('click', operatorUpdate));

// next add all the operators: divide multiply subtract add and equals