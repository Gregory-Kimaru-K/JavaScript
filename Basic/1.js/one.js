const head = document.querySelector('.header');
const arr = []
for (let i=1; i <= 100; i++) {
    arr.push(i);
}

const string = arr.join(', ');

head.innerHTML = string;