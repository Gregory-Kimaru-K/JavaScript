const h1_1 = document.createElement('h1');
const h3_1 = document.createElement('h3');
const h1_2 = document.createElement('h1');
const h3_2 = document.createElement('h3');
const h1_3 = document.createElement('h1');
const h3_3 = document.createElement('h3');
const h1_4 = document.createElement('h1');
const h3_4 = document.createElement('h3');

const arr = ['Zack', 'Jack', 'Chuck', 'Jane', 'Amy', 'Gregory', 'Grace', 'Muthoni'];

h1_1.innerHTML = 'Original Array';
h3_1.innerHTML = arr;
document.body.appendChild(h1_1);
document.body.appendChild(h3_1);

arr.pop();

h1_2.innerHTML = 'Removed last element in Array';
h3_2.innerHTML = arr;
document.body.appendChild(h1_2);
document.body.appendChild(h3_2);

arr.shift()
h1_3.innerHTML = 'Removed first element in Array';
h3_3.innerHTML = arr;
document.body.appendChild(h1_3);
document.body.appendChild(h3_3);

arr.splice(3, 1)
h1_4.innerHTML = 'Removed Third element in Array';
h3_4.innerHTML = arr;
document.body.appendChild(h1_4);
document.body.appendChild(h3_4);