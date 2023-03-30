const firstNumber = prompt('Enter first number');
const secondNumber = prompt('Enter second number');

function isNumber(input) {
    if (isNaN(input) || !input) {
        return true
    } return false;
}

function calculate(firstNumber, secondNumber) {
    
    if(isNumber(firstNumber) || isNumber(secondNumber)) {
        return getResult('One of the inputs is not a number. Operation canceled.', '');
    } else 
    sum(firstNumber, secondNumber),
    sub(firstNumber,secondNumber),
    mul(firstNumber,secondNumber),
    div(firstNumber,secondNumber);
}

function getResult(string, result) {
    const wrapper = document.querySelector('.wrapper');
    const div = document.createElement('div');
    div.classList.add('box');
    wrapper.appendChild(div);

    if (result > 0) {
        div.style.backgroundColor = 'green';
    } else if (result < 0 && result >= -50) {
        div.style.backgroundColor = '#b20000';
    } else if (result <= -50 && result >= -100) {
        div.style.backgroundColor = '#990000';
    } else if (result <= -100 && result >= -500) {
        div.style.backgroundColor = '#7f0000';
    } else if (result <= -500 && result > -Infinity) {
        div.style.backgroundColor = '#4c0000';
    }

    return div.textContent = string + result;
}

function sum(firstNumber, secondNumber) {
    const result = +firstNumber + +secondNumber;
    return getResult('SUM = ', result);
}

function sub(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;
    if (+firstNumber < +secondNumber) {
        confirm('Are you sure you want to continue?') ?
        getResult('SUB = ', result) : getResult('Subtraction operation canceled.', '');
    } else getResult('SUB = ', result);
}

function mul(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    return getResult('MUL = ', result);
}

function div(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;
    if (secondNumber == 0) {
        getResult(`You can't divide by 0`, '');
    } else getResult('DIV = ', result);
}

calculate(firstNumber, secondNumber);

// ---------------------------------------------------------------

const numbers = ['js',5,46,32,true,7,83,[],16,75];

function checkIndex(data) {
    if (typeof data !== 'number') {
        return true
    } return false
}

function getMinNumber(arr) {
    let min = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if ( checkIndex(arr[i]) ) {
            continue;
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return getResult('Minimum number is: ', min);
}

function getMaxNumber(arr) {
    let max = -Infinity;

    for (index of arr) {
        if ( checkIndex(index) ) {
            continue;
        }

        if (index > max) {
            max = index;
        }
    }       

    return getResult('Maximum number is: ', max);
}

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if ( checkIndex(arr[i]) ) {
            continue;
        }
        sum += arr[i];
    }

    return getResult('Sum is equal to: ', sum)
}

function tree() {
    let hashtagTree = [];
    let hash = '';

    for (let i = 0; i < 5; i++) {
        hashtagTree.push(hash += '#')
    }

    const wrapper = document.querySelector('.wrapper');
    const p = document.createElement('p');
    p.classList.add('box');
    p.classList.add('align');
    wrapper.appendChild(p);

    for (let i = 0; i < hashtagTree.length; i++) {
        p.innerHTML += `${hashtagTree[i]}<br>`;
    }
        return p.innerHTML;
}

getMinNumber(numbers);
getMaxNumber(numbers);
getSum(numbers);
tree();

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

// ---------------------------------------------------------------

function Accumulator(x) {
    this.y = x;

    this.increment = function() {
        return ++this.y
    };

    this.decrement = function() {
        return --this.y
    }; 
}

function CancelableAccumulator(x) {
    Accumulator.call(this, x);
    this.clear = function() {
        return this.y = x
    }
}

const a = new Accumulator(25);

const b = new CancelableAccumulator(40);

// console.log(a.increment());
// console.log(a.increment());
// console.log(a.decrement());
// console.log('----------------');
// console.log(b.decrement());
// console.log(b.decrement());
// console.log(b.clear());
// console.log(b.increment());
// console.log(b.increment());