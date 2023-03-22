// let firstNumber = prompt('Enter first number');
// let secondNumber = prompt('Enter second number');

function isNumber(input) {
    if (isNaN(input) || !input) {
        return true
    } return false;
}

function calculate(firstNumber, secondNumber) {
    const error = 'One of the inputs is not a number. Operation canceled.';
    
    if(isNumber(firstNumber) || isNumber(secondNumber)) {
        return alert(error);
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

// calculate(firstNumber, secondNumber);

// ---------------------------------------------------------------

function isObjectEmpty(object) {
    return Object.keys(object).length === 0
}

const user = {
    name: 'Vlad',
    age: 29,
    sayHello() {
        alert(`Hello my name is ${this.name} and I'm ${this.age} years old.`)
    }
}

const calculator = {
    error: 'One of the inputs is not a number. Operation canceled.',
    ask() {
        this.firstNumber = prompt('Enter first number');
        this.secondNumber = prompt('Enter second number');
    },
    sum() {
        if (isNumber(this.firstNumber) || isNumber(this.secondNumber)) {
            return alert(this.error);
        } alert(`Sum equals to: ${Number(this.firstNumber) + Number(this.secondNumber)}`);
    },
    mul() {
        if (isNumber(this.firstNumber) || isNumber(this.secondNumber)) {
            return alert(this.error);
        } alert(`Multiplication equals to: ${this.firstNumber * this.secondNumber}`);
    }
}

// user.sayHello();
// calculator.ask();
// calculator.sum();
// calculator.mul();



