const h1_1 = document.createElement('h1');
const h1_2 = document.createElement('h1');
const h1_3 = document.createElement('h1');
const h3_1 = document.createElement('h3');
const h3_2 = document.createElement('h3');
const h3_3 = document.createElement('h3');

let arr = ['Zendaya', 'Zack', 'Jack', 'Chuck', 'Norris', 'Jane', 'Amy', 'Gregory', 'Grace', 'Muthoni'];

h1_1.innerHTML = 'Original Array';
h3_1.innerHTML = arr;

let start = arr.unshift('Frank');

h1_2.innerHTML = 'Start Added To Array';
h3_2.innerHTML = arr;

let end = arr.push('Fancis');

h1_3.innerHTML = 'End Append';
h3_3.innerHTML = arr;

document.body.appendChild(h1_1);
document.body.appendChild(h3_1);
document.body.appendChild(h1_2);
document.body.appendChild(h3_2);
document.body.appendChild(h1_3);
document.body.appendChild(h3_3);