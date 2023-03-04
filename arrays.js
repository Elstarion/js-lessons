const numbers = [10,5,46,32,29,7,83,56,18,75];

let sum = 0;
let minValue = +Infinity;
let maxValue = -Infinity;

for (let i = 0; i < numbers.length; i++) {

    if (typeof numbers[i] !== 'number' ) {
        continue;
    }
    sum += numbers[i];

    if (numbers[i] < minValue) {
        minValue = numbers[i];
    }

    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }    
}

alert(`Minimum number is: ${minValue}`);
alert(`Maximum number is: ${maxValue}`);
alert(`Sum is equal to: ${sum}`);

let hashtagTree = [];
let hash = '';

for (let i = 0; i < 5; i++) {
    hashtagTree.push(hash += '#');
}

alert(`${hashtagTree[0]}
${hashtagTree[1]}
${hashtagTree[2]}
${hashtagTree[3]}
${hashtagTree[4]}
`);
