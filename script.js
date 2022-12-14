function clearDisplay(){
    display.textContent = '';
}

function operate(num1, num2, operator){
    switch (operator){
        case '+': 
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

const display = document.querySelector('.display');
const numKeys = document.querySelectorAll('.num');
const operatorKey = document.querySelectorAll('.operator');
const equal = document.querySelector('.eval');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const dec = document.querySelector('.dec');
let defaultDisplay = true;
let occurDecimal = false;
let num1, num2, operator, result;

numKeys.forEach(key => {
    key.addEventListener('click', e => {
        if(defaultDisplay){
            clearDisplay();
            defaultDisplay = !defaultDisplay;
        }
        display.textContent += key.value;
    })
})

dec.addEventListener('click', ()=>{
    if(!occurDecimal && !defaultDisplay){
        display.textContent += dec.value;
        occurDecimal = !occurDecimal;
    }
})

operatorKey.forEach(key => {
    key.addEventListener('click', ()=>{
        if (num1 && operator && display.textContent && !defaultDisplay){
            num2 = parseFloat(display.textContent);
            result = operate(num1, num2, operator);
            defaultDisplay = true;
            occurDecimal = false;
            display.textContent = result;
            num1 = 0;
            num2 = 0;
        }
        num1 = parseFloat(display.textContent);
        operator = key.value;
        defaultDisplay = true;
        occurDecimal = false;
    })
})

equal.addEventListener('click', ()=>{
    num2 = parseFloat(display.textContent);
    if (num1 && num2 && operator){
        result = Math.round(operate(num1, num2, operator).toFixed(5) * 100000)/ 100000;
        defaultDisplay = true;
        display.textContent = result;
        num1 = 0;
        num2 = 0;
    }
})

clear.addEventListener('click', ()=>{
    num1 = 0;
    num2 = 0;
    display.textContent = 0;
    defaultDisplay = true;
    occurDecimal = false;
})

del.addEventListener('click', ()=>{
    display.textContent = display.textContent.slice(0, display.textContent.length - 1)
})