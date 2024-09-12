const head = document.querySelector('.head');

let sum = 0;

for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

head.innerHTML = `Sum of even numbers between 1 and 50 numbers ${sum}`