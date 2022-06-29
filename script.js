'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = 0;
let score = 20;
let highScore = 0;
reset();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    setMessage('No number!');
  } else if (guess === secretNumber) {
    // When player wins.
    document.querySelector('.number').textContent = secretNumber;
    setMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    score--;
    setScore(score);
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!';
    if (score < 1) {
      document.querySelector('.number').textContent = secretNumber;
      setMessage('You lost the game');
      return;
    }
  }
});

document.querySelector('.again').addEventListener('click', reset);

function reset() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  setScore(score);
}

function setMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}
