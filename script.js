let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let screenReset = false

const clearBTN = document.getElementById('clearBtn')
const display = document.getElementById('display') // displayValue === the same???
const numKeys = document.querySelector('buttons')
const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsBTN = document.getElementById('equals')
const displayLast = document.getElementById('displayMini')

equalsBTN.addEventListener('click', evaluate)

// function inputs numbers and symbols into calculator display.

function appendToDisplay(value) {
    if(display.textContent === '0' || screenReset)
    resetDisplay()
    if(display.textContent === '0' && value !== '.') {
        display.textContent = value
    } else {
        display.textContent += value
    }
}
function resetDisplay() {
    display.textContent = ''
    screenReset = false
}

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendToDisplay(button.textContent)))

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)))

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
    displayLast.textContent = ''
    firstOperand = ''
    secondOperand = ''
    currentOperation = null
}

// function evaluates display value and calculates result to output

function setOperation(operator) {
    if(currentOperation !== null) evaluate()
    firstOperand = display.textContent
    currentOperation = operator
    displayLast.textContent = `${firstOperand} ${currentOperation}`
    screenReset = true
}

function evaluate() {
    if(currentOperation === null || screenReset) return
    if(currentOperation === '÷' && display.textContent === '0') {
    alert("Dividing by zero is prohibited, law enforcement has been notified. Do not resist.")
    return
    }
    secondOperand = display.textContent
    display.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    displayLast.textContent = `${firstOperand} ${currentOperation} ${secondOperand}`
    currentOperation = null
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

// take display input and put it into operate(), put result into display.

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

// core calculator functions, takes 3 inputs, returns 1 result

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


/* need to fix calculation display error*/