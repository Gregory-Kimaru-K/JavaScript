// Select the body or any other container where you want to append the h2 elements
const container = document.querySelector('body'); // You can change 'body' to any other specific container

// Function to generate the FizzBuzz logic
function fizzBuzz() {
    for (let num = 1; num <= 50; num++) {
        let text = `The number ${num} called `; // Base text for each number
        let result = ''; // Variable to store Fizz, Buzz, or FizzBuzz

        // FizzBuzz logic
        if (num % 3 === 0 && num % 5 === 0) {
            result = 'FizzBuzz';
        } else if (num % 3 === 0) {
            result = 'Fizz';
        } else if (num % 5 === 0) {
            result = 'Buzz';
        } else {
            result = 'Not Fizz or Buzz or FizzBzz';
        }

        const h2 = document.createElement('h2');

        h2.innerHTML = `${text} ${result}`;
        container.appendChild(h2);
    }
}

fizzBuzz();
