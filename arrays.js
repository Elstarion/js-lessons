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

    return min
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

    return max
}

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if ( checkIndex(arr[i]) ) {
            continue;
        }
        sum += arr[i];
    }

    return sum
}

function tree() {
    let hashtagTree = [];
    let hash = '';

    for (let i = 0; i < 5; i++) {
        hashtagTree.push(hash += '#')
    }

    let result = hashtagTree.join('\n');
    return alert(result);
}

alert(`Minimum number is: ${getMinNumber(numbers)}`);
alert(`Maximum number is: ${getMaxNumber(numbers)}`);
alert(`Sum is equal to: ${getSum(numbers)}`);
tree();