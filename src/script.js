const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach((answer) => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Vad heter Rumäniens huvudstad?',
    answers: [
      { text: 'Bukarest', correct: true },
      { text: 'Sofia', correct: false },
      { text: 'Köpenhamn', correct: false },
      { text: 'Budapest', correct: false },
    ],
  },

  {
    question: 'Vad hette den andra mannen på månen?',
    answers: [
      { text: 'Buzz Lightyear', correct: false },
      { text: 'Buzz the Fuzz', correct: false },
      { text: 'Genombussige Bert', correct: false},
      { text: 'Buzz Aldrin', correct: true}
    ],
  },
  {
    question: 'Vilket år föddes Baby Hitler?',
    answers: [
      { text: '1889', correct: true },
      { text: '2001', correct: false },
      { text: '1909', correct: false },
      { text: '1768', correct: false },
    ],
  },
  {
    question: 'Hur känns det att få en 16 tons vikt i huvudet?',
    answers: [
      { text: 'Lite jobbigt', correct: false },
      { text: 'Aj', correct: true },
      { text: 'Oskönt', correct: false },
      { text: 'Venne', correct: false },
    ],
  },
  {
    question: 'Vad är summan av 45 och 46?',
    answers: [
      { text: '90', correct: false },
      { text: '91', correct: true },
      { text: '81', correct: false },
      { text: '-1', correct: false},

    ],
  },
]

//const question = [
//    {
//       question: 'Vad heter Rumäniens huvudstad',
//       answers: [
//           { text: 'Bukarest', correct: true},
//           { text: 'Sofia', correct: false},
//           { text: 'Köpenhamn', correct: false},
//           { text: 'Budapest', correct: false}
//
//       ]
//    }
//  ]
