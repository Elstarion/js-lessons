let firstNumber = prompt('Enter first number');

let secondNumber = prompt('Enter second number');

function calculate(firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('One of the inputs is not a number. Operation canceled.');
    } else if (firstNumber == null || secondNumber == null || firstNumber == '' || secondNumber == '') {
        alert('One if the inputs is empty. Operation canceled');
    } else
    sum(firstNumber, secondNumber),
    sub(firstNumber,secondNumber),
    mul(firstNumber,secondNumber),
    div(firstNumber,secondNumber);
}

function sum(firstNumber, secondNumber) {
     alert(`Sum equals to: ${Number(firstNumber) + Number(secondNumber)}`);
}

function sub(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
        confirm('Are you sure you want to continue?') ?
        alert(`Subtraction equals to: ${firstNumber - secondNumber}`) : alert('Subtraction operation canceled');
    } else alert(`Subtraction equals to: ${firstNumber - secondNumber}`)
}

function mul(firstNumber, secondNumber) {
    alert(`Multiplication equals to: ${firstNumber * secondNumber}`); 
}

function div(firstNumber, secondNumber) {
    if (secondNumber == 0) {
        alert(`You can't divide by 0`);
    } else alert (`Division equals to: ${firstNumber / secondNumber}`);
}

calculate(firstNumber, secondNumber);