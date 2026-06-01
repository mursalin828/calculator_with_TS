let currentInput = "";
let previousInput = "";
let operator = null;
const display = document.getElementById("display");
window.appendValue = (val) => {
    if (val === "+" || val === "-" || val === "*" || val === "/") {
        if (currentInput === "")
            return;
        operator = val;
        previousInput = currentInput;
        currentInput = "";
    }
    else {
        currentInput += val;
        display.value = currentInput;
    }
};
window.clearDisplay = () => {
    currentInput = "";
    previousInput = "";
    operator = null;
    display.value = "";
};
window.calculatorResult = () => {
    let result = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current))
        return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 0;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = "";
    display.value = currentInput;
};
export {};
