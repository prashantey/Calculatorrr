document.addEventListener('DOMContentLoaded', function () {
    const firstNumberInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const resultElement = document.querySelector('.results');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const resetButton = document.getElementById('reset');

    function add() {
        const result = parseFloat(firstNumberInput.value) + parseFloat(secondNumberInput.value);
        displayResult(result.toFixed(2));
    }

    function subtract() {
        const result = parseFloat(firstNumberInput.value) - parseFloat(secondNumberInput.value);
        displayResult(result.toFixed(2));
    }

    function multiply() {
        const result = parseFloat(firstNumberInput.value) * parseFloat(secondNumberInput.value);
        displayResult(result.toFixed(2));
    }

    function divide() {
        const result = parseFloat(firstNumberInput.value) / parseFloat(secondNumberInput.value);
        displayResult(result.toFixed(2));
    }

    function displayResult(result) {
        resultElement.textContent = result;
    }

    addButton.addEventListener('click', add);
    subtractButton.addEventListener('click', subtract);
    multiplyButton.addEventListener('click', multiply);
    divideButton.addEventListener('click', divide);

    resetButton.addEventListener('click', function () {
        firstNumberInput.value = '';
        secondNumberInput.value = '';
        resultElement.textContent = '';
    });
});