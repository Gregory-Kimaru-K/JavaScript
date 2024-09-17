const h1_1 = document.createElement('h3');

function IsPrime(number) {
    if (number <= 1) {
        return false;
    }

    else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let num = 7;
let prime = IsPrime(num);

if (prime === false) {
    h1_1.innerHTML = `${num} is not a prime number`
    document.body.appendChild(h1_1);
} else {
    h1_1.innerHTML = `${num} is a prime number`
    document.body.appendChild(h1_1);
}