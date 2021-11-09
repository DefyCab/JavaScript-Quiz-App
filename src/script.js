const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){

}

function selectAnswer(){

}

const question = [
    {
       question: 'Vad heter Rumäniens huvudstad',
       answers: [
           { text: 'Bukarest', correct: true},
           { text: 'Sofia', correct: false},
           { text: 'Köpenhamn', correct: false},
           { text: 'Budapest', correct: false}

       ] 
    }
]