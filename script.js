const questions = [
    {
        question: "In web design, what does CSS stand for?",
        answers: [
            { text: "Corresponding Style Sheet", status: 'wrong' },
            { text: "Counter Strike Source", status: 'wrong' },
            { text: "Correct Strick Source", status: 'wrong' },
            { text: "Cascading Style Sheet", status: 'correct' }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", status: 'wrong' },
            { text: "Madrid", status: 'wrong' },
            { text: "Paris", status: 'correct' },
            { text: "Rome", status: 'wrong' }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hypertext Markup Language", status: 'correct' },
            { text: "Hyperlink and Text Markup Language", status: 'wrong' },
            { text: "Home Tool Markup Language", status: 'wrong' },
            { text: "Hyperlink Text Mode Language", status: 'wrong' }
        ]
    },
    {
        question: "Which language is used for web apps?",
        answers: [
            { text: "PHP", status: 'correct' },
            { text: "Python", status: 'wrong' },
            { text: "Java", status: 'wrong' },
            { text: "All of the above", status: 'wrong' }
        ]
    },
    {
        question: "Which is not a JavaScript framework?",
        answers: [
            { text: "Angular", status: 'wrong' },
            { text: "React", status: 'wrong' },
            { text: "Vue", status: 'wrong' },
            { text: "Python", status: 'correct' }
        ]
    },
    {
        question: "Which of the following is a server-side JavaScript object?",
        answers: [
            { text: "File", status: 'correct' },
            { text: "Function", status: 'wrong' },
            { text: "FileUpload", status: 'wrong' },
            { text: "Date", status: 'wrong' }
        ]
    },
    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Netscape", status: 'correct' },
            { text: "Bell Labs", status: 'wrong' },
            { text: "Sun Microsystems", status: 'wrong' },
            { text: "IBM", status: 'wrong' }
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "style", status: 'correct' },
            { text: "class", status: 'wrong' },
            { text: "font", status: 'wrong' },
            { text: "styles", status: 'wrong' }
        ]
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('.quiz-container button:not(.navigation button)');

    questionElement.innerText = questions[index].question;

    buttons.forEach((button, i) => {
        button.innerText = questions[index].answers[i].text;
        button.setAttribute('onclick', `checkAnswer(this, '${questions[index].answers[i].status}')`);
        button.classList.remove('correct', 'wrong');
    });

    // Update button visibility
    document.getElementById('prevBtn').style.display = index === 0 ? 'none' : 'inline-block';
    document.getElementById('nextBtn').style.display = index === questions.length - 1 ? 'none' : 'inline-block';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function checkAnswer(element, status) {
    element.classList.remove('correct', 'wrong');
    element.classList.add(status);
}

document.addEventListener('DOMContentLoaded', () => showQuestion(currentQuestionIndex));
