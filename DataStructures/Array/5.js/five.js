const h1_1 = document.createElement('h1');
const h3_1 = document.createElement('h3');
const h1_2 = document.createElement('h1');
const h3_2 = document.createElement('h3');

let arr = ['Zendaya', 'Zack', 'Jack', 'Chuck', 'Norris', 'Jane', 'Amy', 'Gregory', 'Grace', 'Muthoni'];

let length = arr.length;

h1_1.innerHTML = 'Array'
h3_1.innerHTML = arr;

h1_2.innerHTML = 'Length of array';
h3_2.innerHTML = length;

document.body.appendChild(h1_1);
document.body.appendChild(h3_1);
document.body.appendChild(h1_2);
document.body.appendChild(h3_2);