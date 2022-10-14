// DOM variables

// Control Buttons
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const nextButton = document.getElementById('next-btn');
const instructionButton = document.getElementById('instruction-btn');
const okButton = document.getElementById('ok-btn');
const goBtn = document.getElementById('go-btn');
const playAgainBtn = document.getElementById("play-again-btn");
// Input Field
let userNameText = document.getElementById('username').value;
const userName = document.getElementById('username');
const inputField = document.getElementById('name-input');
const nameLabel = document.getElementById('name-label');
// Quiz Container
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const alertContainer = document.getElementById('alert-container');
const alertText = document.getElementById('alert-text');
const welcomeContainer = document.getElementById('welcome-container');
const welcomeText = document.getElementById('welcome-text');
const timeContainer = document.getElementById('time-container');
const timeText = document.getElementById('time-text');
const ball = document.getElementById('ball');
// Variables needed to display questions
let shuffleQuestions;
let currentQuestion;
let shuffleAnswers;
// Variables needed to keep score
let currentScore = 0;
let correctAnswer = 0;
const totalQuestions = 10;
// Timer variables
let timer = document.getElementById('timer');
let gameTimer;
// Stats section
const stats = document.getElementById('stats');
const statHeader = document.getElementById('stats-header');
const qText = document.getElementById('q-text');
const aText = document.getElementById('a-text');

// Button event listeners

startButton.addEventListener('click', welcomeMessage);

nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});

restartButton.addEventListener('click', restartGame);

instructionButton.addEventListener('click', showInstructions);

okButton.addEventListener('click', hideInstructions);

goBtn.addEventListener('click', startGame);

playAgainBtn.addEventListener('click', restartGame);


/**
 * Checks if input username is valid if it isnt runs welcomeAlert function and if not shows user error message
 */
function welcomeMessage() {
    userNameText = document.getElementById('username').value;
    startButton.classList.add('hide');
    if (userNameText.length >= 3 && userNameText.length < 10) {
        welcomeAlert();
    } else {
        usernameInvalid();
    }
}

/**
 * Shows user welcome message with button to start the game
 */
function welcomeAlert() {
    username.classList.add('hide');
    nameLabel.classList.add('hide');
    welcomeContainer.classList.remove('hide');
    welcomeContainer.classList.add('alert-container');
    welcomeText.innerText = `Welcome to the quiz ${userNameText}`;
}

/**
 * Starts the game when the got it button is clicked after user has entered a valid username
 */
function startGame() {
    startButton.classList.add('hide');
    userName.classList.add('hide');
    nameLabel.classList.add('hide');
    nextButton.classList.remove('hide');
    questionElement.classList.remove('hide');
    answerButtons.classList.remove('hide');
    instructionButton.classList.add('hide');
    timer.classList.remove('hide');
    ball.classList.add('hide');
    // Shuffles the questions to give a random array
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    // Sorts the answers array to match up with the shuffled question
    shuffleAnswers = shuffleQuestions[0].answers.sort(() => Math.random() - .5);
    currentQuestion = 0;
    currentScore = 0;
    setNextQuestion();
    hideWelcome();
    startTimer();
    stats.classList.remove('hide');
    statHeader.innerText = `${userNameText}'s current stats:`;
}

/**
 * Uses the resetState function to remove any answers and question from the previous question
 * and adds the new shuffled question
 */
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestion]);
    qText.innerText = `Current Question:${currentQuestion + 1} out of ${totalQuestions}`;
    aText.innerText = `Correct answers ${currentScore} out of ${currentQuestion}`;
}

/**
 *  Takes question from array of questions to display, creates a button for each answer
 * and sets dataset for each correct answer
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('ans-btns');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

/**
 * Checks that the users clicked answer has the dataset of correct and if it is increments current score by 1
 * Checks that there is still questions to be displayed and if not gives the user a total score with a message 
 * and shows the restartbutton.
 */

function selectAnswer(e) {
    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    if (selectedAnswer.dataset.correct) {
        currentScore += 1;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffleQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide');
        answerButtons.style.border = 0;
    } else {
        restartButton.classList.remove('hide');
        questionElement.classList.add('hide');
        answerButtons.classList.add('hide');
        timer.classList.add('hide');
        stats.classList.add('hide');
        alertContainer.classList.remove('hide');
        alertContainer.classList.add('alert-container');
        okButton.classList.add('hide');
        stopTimer();
        ball.classList.remove('hide');
        if (currentScore < 4) {
            alertText.innerText = `Better luck next time ${userNameText} you got ${currentScore} out of
             ${currentQuestion + 1} questions correct. Press the restart button to play again`;
        } else if (currentScore < 7) {
            alertText.innerText = `Not bad ${userNameText} you got ${currentScore} out of 
            ${currentQuestion + 1} questions correct. Press the restart button to play again`;
        } else {
            alertText.innerText = `Well done ${userNameText} you got ${currentScore} out of
             ${currentQuestion + 1} questions correct. Press the restart button to play again`;
        }
    }
}

/**
 * Shows correct and incorrect answers by color after user click
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Removes the color status for the next question
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/**
 * Sets currentquestion and currentscore to zero, hides and shows button elements needed to restart the quiz
 */
function restartGame() {
    currentQuestion = 0;
    currentScore = 0;
    startButton.classList.remove('hide');
    userName.classList.remove('hide');
    nameLabel.classList.remove('hide');
    nextButton.classList.add('hide');
    questionElement.classList.add('hide');
    answerButtons.classList.add('hide');
    restartButton.classList.add('hide');
    timer.classList.add('hide');
    instructionButton.classList.remove('hide');
    userName.value = '';
    stopTimer();
    stats.classList.add('hide');
    ball.classList.remove('hide');
    timeContainer.classList.remove('alert-container');
    timeContainer.classList.add('hide');
    alertContainer.classList.add('hide');
    alertContainer.classList.remove('alert-container');
    okButton.classList.remove('hide');
}

/**
 * Removes next button until answer is clicked and removes previous answers from page
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Shows instruction container
 */
function showInstructions() {
    alertContainer.classList.remove('hide');
    alertContainer.classList.add('alert-container');
    instructionButton.classList.add('hide');
    username.classList.add('hide');
    nameLabel.classList.add('hide');
    alertText.innerText = "You have 100 seconds to answer 10 questions. Good luck!";
}

/**
 * Hides instruction container
 */
function hideInstructions() {
    alertContainer.classList.add('hide');
    alertContainer.classList.remove('alert-container');
    instructionButton.classList.remove('hide');
    username.classList.remove('hide');
    nameLabel.classList.remove('hide');
    startButton.classList.remove('hide');
}

/**
 * Alert message if username is invalid
 */
function usernameInvalid() {
    alertContainer.classList.remove('hide');
    alertContainer.classList.add('alert-container');
    alertText.innerText = "Please enter a valid username of between 3 and 9 characters";
    username.classList.add('hide');
    nameLabel.classList.add('hide');
}

/**
 * Hides welcome message, runs when game is started
 */
function hideWelcome() {
    welcomeContainer.classList.add('hide');
    welcomeContainer.classList.remove('alert-container');
}

/**
 * Timer function, displays current timer, displays user message if time runs out and restarts game
 */
function startTimer() {
    let currentTime = 100;
    gameTimer = setInterval(function () {
        currentTime--;
        if (currentTime > 0) {
            timer.innerText = `Time Left:${currentTime}s`;
        } else if (currentTime === 0) {
            questionElement.classList.add('hide');
            answerButtons.classList.add('hide');
            timeContainer.classList.remove('hide');
            timeContainer.classList.add('alert-container');
            nextButton.classList.add('hide');
            timeText.innerText = `Sorry ${userNameText} you ran out of time`;
        }
    }, 1000);
}

/**
 * Resets Timer when it hits zero
 */
function stopTimer() {
    clearInterval(gameTimer);
}


// Quiz questions

const questions = [{
        question: "Which player scored the fastest hat-trick ever in the Premier League?",
        answers: [{
                text: "Sadio Mane",
                correct: true
            },
            {
                text: "Christiano Ronaldo",
                correct: false
            },
            {
                text: "Ruud Van Nistlerooy",
                correct: false
            },
            {
                text: "Wayne Rooney",
                correct: false
            }
        ]
    },
    {
        question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
        answers: [{
                text: "Mohamed Salah",
                correct: false
            },
            {
                text: "Didier Drogba",
                correct: false
            },
            {
                text: "Shane Long",
                correct: true
            },
            {
                text: "Troy Deeney",
                correct: false
            },
        ]
    },
    {
        question: "Which country won the first ever World Cup held in 1930?",
        answers: [{
                text: "Brazil",
                correct: false
            },
            {
                text: "Spain",
                correct: false
            },
            {
                text: "Uruguay",
                correct: true
            },
            {
                text: "Mexico",
                correct: false
            },
        ]

    },

    {
        question: "The record number of World Cup goals is 16 goals in total, scored by who?",
        answers: [{
                text: "Miraslav Klose",
                correct: true
            },
            {
                text: "Pele",
                correct: false
            },
            {
                text: "Thomas Muller",
                correct: false
            },
            {
                text: "Lionel Messi",
                correct: false
            },
        ]

    },

    {
        question: "Which Spanish club's nickname is Los Colchoneros, which translates to 'The Mattress Makers'?",
        answers: [{
                text: "Espanyol",
                correct: false
            },
            {
                text: "Real Vallodid",
                correct: false
            },
            {
                text: "Valencia",
                correct: false
            },
            {
                text: "Athletico Madrid",
                correct: true
            },
        ]

    },

    {
        question: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?",
        answers: [{
                text: "Newells Old Boys",
                correct: true
            },
            {
                text: "River Plate",
                correct: false
            },
            {
                text: "Boca Juniors",
                correct: false
            },
            {
                text: "Chacarita Juniors",
                correct: false
            },
        ]

    },

    {
        question: "Who is the only player to win the Champions League with three different clubs?",
        answers: [{
                text: "Clarence Seedorf",
                correct: true
            },
            {
                text: "Zlatan Ibrahimovic",
                correct: false
            },
            {
                text: "Kaka",
                correct: false
            },
            {
                text: "Luis Figo",
                correct: false
            },
        ]

    },

    {
        question: "Which team was the first from the UK to win the European Cup?",
        answers: [{
                text: "Manchester United",
                correct: false
            },
            {
                text: "Celtic",
                correct: true
            },
            {
                text: "Nottingham Forrest",
                correct: false
            },
            {
                text: "Liverpool",
                correct: false
            },
        ]

    },

    {
        question: "After Juventus, AC Milan and Inter, which team has won the most Serie A titles?",
        answers: [{
                text: "Cagliari",
                correct: false
            },
            {
                text: "Napoli",
                correct: false
            },
            {
                text: "Genoa",
                correct: true
            },
            {
                text: "Lazio",
                correct: false
            },
        ]

    },

    {
        question: "Which outfield player appeared in the Champions League final in three different decades?",
        answers: [{
                text: "Ryan Giggs",
                correct: true
            },
            {
                text: "Paul Scholes",
                correct: false
            },
            {
                text: "Wayne Rooney",
                correct: false
            },
            {
                text: "Roy Keane",
                correct: false
            },
        ]

    },


];