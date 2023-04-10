const quizQuestions = [
    {
        index: 0,
        question: "Which of the following is a primitive data type in JavaScript?",
        choices: ["Object", "Array", "String", "Function"],
        answer: "String"
    },
    {
        index: 1,
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["let", "const", "var", "all of the above"],
        answer: "all of the above"
    },
    {
        index: 2,
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        choices: ["shift()", "unshift()", "push()", "pop()"],
        answer: "push()"
    },
    {
        index: 3,
        question: "Which statement is used to terminate a switch statement in JavaScript?",
        choices: ["break", "continue", "return", "exit"],
        answer: "break"
    },
    {
        index: 4,
        question: "Which function is used to convert a a string to a number in JavaScript?",
        choices: ["parseInt()", "parseFloat()", "toNumber()","toString()"],
        answer: "parseInt()"
    },
    {
        index: 5,
        question: "Which operator is used to concatenate two strings in JavaScript?",
        choices: ["+", "-", "*", "/"],
        answer: "+"
    },
    {
        index: 6,
        question: "Which method is used to remove the last element from an array in JavaScript?",
        choices: ["shift()", "unshift()", "push()", "pop()"],
        answer: "pop()"
    },
    {
        index: 7,
        question: "Which function is used to generate a random number between 0 and 1 in JavaScript?",
        choices: ["random()", "randomNumber()", "Math.random()", "Math.randomNumber()"],
        answer: "Math.random()"
    },
    {
        index: 8,
        question: "Which keyword is used to declare a function in JavaScript?",
        choices: ["func", "function", "def", "define"],
        answer: "function"
    },
    {
        index: 9,
        question: "Which operator is used to strictly compare two values in JavaScript?",
        choices: ["=", "==", "===", "!="],
        answer: "==="
    }
]





//-------------------------------------

//Hides End Screen on Start
var hideEndScreen = document.getElementById("end-screen");
hideEndScreen.style.display = "none"





//Countdown timer
var timerEl = document.getElementById("timer");
//Change timeLeft back to 100 when complete
var timeLeft = 100;

function updateTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft
        
        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endScreen();
        }
        
    }, 1000);
}
//Starts timer
var startButton = document.querySelector("#start-btn")
var quizInstructions = document.querySelector("#quiz-instructions")
var finalScore = document.getElementById("final-score")

startButton.addEventListener("click", function(){
    updateTimer();
    //Hide start button and quiz instructions 
    startButton.style.display = "none"
    quizInstructions.style.display = "none"
    //Populates quiz questions once function is complete
    populateQuiz()
})



//Populate the quiz questions
var quizContainer = document.getElementById("quiz-container")

function populateQuiz(){
    for (var i = 0; i < quizQuestions.length; i++){
        //get question container
        var questionsContainer = document.getElementById("questions-container")
        questionsContainer.textContent = quizQuestions[i].question
        
        //get choices container
        var choicesContainer = document.getElementById("choices-container")

        if (i > 0){
        for (var k = 0; k < 4; k++){
            choicesContainer.removeChild("button")   
        }
    } 
        for (var j = 0; j < quizQuestions[i].choices.length; j++){
            var choices = document.createElement("button");
            choices.innerHTML = quizQuestions[i].choices[j]
            choicesContainer.appendChild(choices)
            }
        //Create function to go to next question
    }
}



//End Screen Code
function endScreen(){
    //Code to switch to end screen when timer is finished
    hideEndScreen.style.display = ""
    finalScore.textContent = timeLeft
}
