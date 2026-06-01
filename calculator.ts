let currentInput: string = "";
let previousInput: string = "";
let operator: string | null = null;

const display = document.getElementById("display") as HTMLInputElement;

(window as any).appendNumber = (num: string): void => {
    currentInput += num;
    display.value = currentInput;
}

(window as any).clearDisplay = (): void => {
    currentInput = "";
    previousInput = "";
    operator = null;
    display.value = "";
}

(window as any).setOperator = (op: string): void => {
    if (currentInput === "") return;
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

(window as any).calculate = (): void => {
    let result: number = 0;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch(operator) {
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
           result = current !== 0 ? prev / current: 0;
            break;
        default: 
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    display.value = currentInput;
}