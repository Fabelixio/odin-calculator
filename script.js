let firstOperand = ''
let secondOperand = ''
let operator
let displayValue

const clearBTN = document.getElementById('clearBtn')
const display = document.getElementById('display')
const numKeys = document.querySelector('buttons')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')

// function inputs numbers and symbols into calculator display.

function appendToDisplay(value) {
    if(display.textContent === '0' && value !== '.') {
        display.textContent = value
    } else {
        display.textContent += value
    }
}

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendToDisplay(button.textContent)))

// function operates delete key, removes last number from display.

function deleteLastCharacter() {
    display.textContent = display.textContent.slice(0, -1)
    if(display.textContent === '') {
        display.textContent = '0'
    }
}

// function operates clear key, clears and resets calculator display.

function clearDisplay() {
    display.textContent = '0'
    firstOperand = ''
    secondOperand = ''
}


function addition(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}

//variables to update display

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+':
            return addition(a, b)
        case '-':
            return subtract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}


/* all buttons need to be linked with event listeners so that when pressed they
activate JS functions. Buttons need to input button and update display.
Once inputted = should call operate function which activates corresponding func. */