let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button-grid button');

let calculator = {
    displayValue: '',
    firstOperand: null,
    secondOperand: null,
    operator: null,
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'clear':
                calculator.displayValue = '';
                calculator.firstOperand = null;
                calculator.secondOperand = null;
                calculator.operator = null;
                display.value = '';
                break;
            case 'equals':
                if (calculator.firstOperand && calculator.operator) {
                    calculator.secondOperand = parseFloat(calculator.displayValue);
                    let result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
                    display.value = result;
                    calculator.displayValue = result;
                    calculator.firstOperand = null;
                    calculator.secondOperand = null;
                    calculator.operator = null;
                }
                break;
            case 'divide':
            case 'multiply':
            case 'subtract':
            case 'add':
                if (calculator.displayValue) {
                    calculator.firstOperand = parseFloat(calculator.displayValue);
                    calculator.operator = button.id;
                    calculator.displayValue = '';
                }
                break;
            default:
                calculator.displayValue += button.id;
                display.value = calculator.displayValue;
        }
    });
});

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case 'divide':
            return firstOperand / secondOperand;
        case 'multiply':
            return firstOperand * secondOperand;
        case 'subtract':
            return firstOperand - secondOperand;
        case 'add':
            return firstOperand + secondOperand;
    }
}