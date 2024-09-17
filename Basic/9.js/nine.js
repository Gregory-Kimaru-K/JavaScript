const randomNumber = Math.floor(Math.random() * 100) + 1;
const feedback = document.querySelector('p');
const UserInput = document.querySelector('input');
const Btn = document.querySelector('button');

Btn.addEventListener('click', function() {
    const UserGuess = Number(UserInput.value);
    const closeRange = 10;
    if (isNaN(UserGuess) || UserGuess < 1 || UserGuess > 100) {
        feedback.innerHTML = 'Enter a number between 1 and 100';
        return;
    }
    if (UserGuess === randomNumber) {
        feedback.innerHTML = 'Congrats! You! Yes you person';
    }

    else if (UserGuess < randomNumber) {
        if (randomNumber - UserGuess <= closeRange) {
            feedback.innerHTML = 'Close. Go slightly higher';
        } else {
            feedback.innerHTML = 'Too low';
        }
    }

    else if (UserGuess > randomNumber){
        if (randomNumber - UserGuess <= 10) {
            feedback.innerHTML = 'Close. Go slightly lower';
        } else {
            feedback.innerHTML = 'Too high';
        }
    }
})