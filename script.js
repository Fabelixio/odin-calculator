let firstOperand = ''
let secondOperand = ''
let operator
let displayValue

const clearBTN = document.getElementById('clearBtn')
const deleteBTN = document.getElementById('deleteBtn')
const display = document.querySelector('display')
const numKeys = document.querySelector('buttons')

numKeys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        //do something
    })
})
clearBTN.addEventListener('click', clear)
deleteBTN.addEventListener('click', del)

function clear() {
}
function del() {   
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