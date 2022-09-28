// DOM variables

const startButton = document.getElementById('start-btn');
const userNameText = document.getElementById('username').value;
const userName = document.getElementById('username');
const inputField = document.getElementById('name-input');
const nameLabel = document.getElementById('name-label');

const questionText = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const score = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

// Runs startGame function when start button is clicked

startButton.addEventListener('click', startGame);

/**
 * Gets value of input username,checks if it is 3 characters or more and hides all relevant elements to start game
 */
function startGame() {
    let userNameText = document.getElementById('username').value;
    if (userNameText.length >= 3) {
        alert(`Welcome to the quiz ${userNameText}`);
        startButton.classList.add('hide');
        userName.classList.add('hide');
        nameLabel.classList.add('hide');
        score.classList.remove('hide');
        restartButton.classList.remove('hide');
        questionText.classList.remove('hide');
        answerButtons.classList.remove('hide');
    } else {
        alert("Please enter a valid username with 3 characters or more.")
    }
}