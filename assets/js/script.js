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
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
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
                value: "Brazil",
                correct: false
            },
            {
                value: "Spain",
                correct: false
            },
            {
                value: "Uruguay",
                correct: true
            },
            {
                value: "Mexico",
                correct: false
            },
        ]

    },

    {
        question: "The record number of World Cup goals is 16, scored by who?",
        answers: [{
                value: "Miraslav Klose",
                correct: true
            },
            {
                value: "Pele",
                correct: false
            },
            {
                value: "Thomas Muller",
                correct: false
            },
            {
                value: "Lionel Messi",
                correct: false
            },
        ]

    },

    {
        question: "Which Spanish club's nickname is Los Colchoneros, which translates to English as 'The Mattress Makers'?",
        answers: [{
                value: "Espanyol",
                correct: false
            },
            {
                value: "Real Vallodid",
                correct: false
            },
            {
                value: "Valencia",
                correct: false
            },
            {
                value: "Athletico Madrid",
                correct: true
            },
        ]

    },

    {
        question: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?",
        answers: [{
                value: "Newells Old Boys",
                correct: true
            },
            {
                value: "River Plate",
                correct: false
            },
            {
                value: "Boca Juniors",
                correct: false
            },
            {
                value: "Chacarita Juniors",
                correct: false
            },
        ]

    },

    {
        question: "Who is the only player to win the Champions League with three different clubs?",
        answers: [{
                value: "Clarence Seedorf",
                correct: true
            },
            {
                value: "Zlatan Ibrahimovic",
                correct: false
            },
            {
                value: "Kaka",
                correct: false
            },
            {
                value: "Luis Figo",
                correct: false
            },
        ]

    },

    {
        question: "Which team was the first from the UK to win the European Cup?",
        answers: [{
                value: "Manchester United",
                correct: false
            },
            {
                value: "Celtic",
                correct: true
            },
            {
                value: "Nottingham Forrest",
                correct: false
            },
            {
                value: "Liverpool",
                correct: false
            },
        ]

    },

    {
        question: "After Juventus, AC Milan and Inter, which team has won the most Serie A titles?",
        answers: [{
                value: "Cagliari",
                correct: false
            },
            {
                value: "Napoli",
                correct: false
            },
            {
                value: "Genoa",
                correct: true
            },
            {
                value: "Lazio",
                correct: false
            },
        ]

    },

    {
        question: "Which outfield player appeared in the Champions League final in three different decades?",
        answers: [{
                value: "Ryan Giggs",
                correct: true
            },
            {
                value: "Paul Scholes",
                correct: false
            },
            {
                value: "Wayne Rooney",
                correct: false
            },
            {
                value: "Roy Keane",
                correct: false
            },
        ]

    },


]