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

let firstNum
let secondNum
let operator
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


/* Fill out HTML with buttons, style initial calc with CSS, dont worry about linking to JS.
build up calculator functions and link them to button presses to make the buttons
the input into the function operations. */