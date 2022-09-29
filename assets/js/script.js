// DOM variables

// Control Buttons
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const nextButton = document.getElementById('next-btn');
// Input Field
const userNameText = document.getElementById('username').value;
const userName = document.getElementById('username');
const inputField = document.getElementById('name-input');
const nameLabel = document.getElementById('name-label');
// Quiz Container
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreText = document.getElementById('score');
// Variables needed to display questions
let shuffleQuestions;
let currentQuestion;
let shuffleAnswers;
let currentScore = 0;
let correctAnswer = 0;

// Runs startGame function when start button is clicked

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
})


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
        nextButton.classList.remove('hide');
        questionElement.classList.remove('hide');
        answerButtons.classList.remove('hide');
        // Shuffles the questions to give a random array
        shuffleQuestions = questions.sort(() => Math.random() - .5);
        // Sorts the answers array to match up with the shuffled question
        shuffleAnswers = shuffleQuestions[0].answers.sort(() => Math.random() - .5);
        currentQuestion = 0;
        currentScore = 0;
        setNextQuestion();

    } else {
        alert("Please enter a valid username with 3 characters or more.")
    }
}


function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestion])
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
    })
}

function selectAnswer(e) {
    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    if(selectedAnswer.dataset.correct) {
        currentScore += 1;
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide');
    } else {
        restartButton.classList.remove('hide');
        scoreText.classList.remove('hide');
        scoreText.innerText = `Well done you got ${currentScore} out of ${currentQuestion + 1} questions right`
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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


// Quiz questions

const questions = [{
        question: "Which player scored the fastest hat-trick in the Premier League?",
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
        question: "Which country won the first ever World Cup in 1930?",
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
        question: "The record number of World Cup goals is 16, scored by who?",
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
        question: "Which Spanish club's nickname is Los Colchoneros, which translates to English as 'The Mattress Makers'?",
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


]