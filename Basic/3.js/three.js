let result = 1
const h1_1 = document.createElement('p');


function factorial(n) {
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
};

let num = 5;
let fact = factorial(num);
h1_1.innerHTML = `The factorial of ${num} is ${fact}`;
document.body.appendChild(h1_1);