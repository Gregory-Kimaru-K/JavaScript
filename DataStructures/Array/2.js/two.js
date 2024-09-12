const head = document.querySelector('.head');
const head2 = document.querySelector('.head2');
const head3 = document.querySelector('.head3');


const arr = ['Zendaya', 'Zack', 'Jack', 'Chuck', 'Norris', 'Jane', 'Amy', 'Gregory', 'Grace', 'Muthoni'];

console.log(arr);
const sorted = [...arr].sort();

head.innerHTML = arr;
head2.innerHTML = sorted;
head3.innerHTML = sorted.reverse();

console.log(sorted);