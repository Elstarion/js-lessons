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
    ask() {
        this.firstNumber = +prompt('Enter first number');
        this.secondNumber = +prompt('Enter second number');
    },
    sum() {
        alert(`Sum equals to: ${this.firstNumber + this.secondNumber}`);
    },
    mul() {
        alert(`Multiplication equals to: ${this.firstNumber * this.secondNumber}`);
    }
}

user.sayHello();
calculator.ask();
calculator.sum();
calculator.mul();