let firstNumber = prompt('Enter first number');

let secondNumber = prompt('Enter second number');

if (firstNumber == null || secondNumber == null || firstNumber == '' || secondNumber == '') {
    alert('One of the inputs is empty. Operation canceled.')
} else {
    alert(`Sum equals to: ${Number(firstNumber)  + Number(secondNumber)}`);
    alert(`Multiplication equals to: ${firstNumber * secondNumber}`);

    if (Number(firstNumber) < Number(secondNumber)) {
        confirm('Are you sure you want to continue?') ? 
        alert(`Subtraction equals to: ${firstNumber - secondNumber}`) : alert('Subtraction operation canceled');
    } else alert(`Subtraction equals to: ${firstNumber - secondNumber}`)
    
    if (secondNumber == 0) {
        alert(`You can't divide by 0`)
    } else alert (`Division equals to: ${firstNumber / secondNumber}`);
}