const startButton = document.getElementById('start-btn');
const userName = document.getElementById('username').value;
const inputField = document.getElementById('name-input');

const questionText = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const score = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

startButton.addEventListener('click', startGame);

function startGame() {
    let userName = document.getElementById('username').value;
    if (userName.length >= 3) {
        alert(`Welcome to the quiz ${userName}`);
        inputField.classList.add('hide');
        questionText.classList.remove('hide');
    } else {
        alert("Please enter a valid username with 3 characters or more.")
    }
}