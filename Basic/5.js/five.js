function reverseString(str) {
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    };
    return reversedStr;
}

let strings = 'Hello'

let reversed = reverseString(strings)

let h1_1 = document.createElement('h4')
h1_1.innerHTML = `Original String is ${strings} and the reversed string is ${reversed}.`

document.body.appendChild(h1_1);