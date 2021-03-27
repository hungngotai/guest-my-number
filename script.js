'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if(!guess) {
    displayMessage('No number!');
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too low!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too high!');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     displayMessage('You lost the game!');
  //     document.querySelector('.score').textContent = 0;
  //   }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low!' : 'Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess === secretNumber){
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    };
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
})
