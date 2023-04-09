/* const quizQuestions = [
    {
        question: "Which of the following is a primitive data type in JavaScript?"
        choices: ["Object", "Array", "String", "Function"]
        answer: "String"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?"
        choices: ["let", "const", "var", "all of the above"]
        answer: "all of the above"
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?"
        choices: ["shift()", "unshift()", "push()", "pop()"]
        answer: "push()"
    },
    {
        question: "Which statement is used to terminate a switch statement in JavaScript?"
        choices: ["break", "continue", "return", "exit"]
        answer: "break"
    },
    {
        question: "Which function is used to convert a a string to a number in JavaScript?"
        choices: ["parseInt()", "parseFloat()", "toNumber()","toString()"]
        answer: "parseInt()"
    },
    {
        question: "Which operator is used to concatenate two strings in JavaScript?"
        choices: ["+", "-", "*", "/"]
        answer: "+"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?"
        choices: ["shift()", "unshift()", "push()", "pop()"]
        answer: "pop()"
    },
    {
        question: "Which function is used to generate a random number between 0 and 1 in JavaScript?"
        choices: ["random()", "randomNumber()", "Math.random()", "Math.randomNumber()"]
        answer: "Math.random()"
    },
    {
        question: "Which keyword is used to declare a function in JavaScript?"
        choices: ["func", "function", "def", "define"]
        answer: "function"
    },
    {
        question: "Which operator is used to strictly compare two values in JavaScript?"
        choices: ["=", "==", "===", "!="]
        answer: "==="
    }
]
*/




//-------------------------------------

//Hides End Screen on Start
var hideEndScreen = document.getElementById("end-screen");
hideEndScreen.style.display = "none"





//Countdown timer
var timerEl = document.getElementById("timer");
var timeLeft = 5;

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
})

function endScreen(){
    //Code to switch to end screen when timer is finished
    hideEndScreen.style.display = ""
    finalScore.textContent = timeLeft
}
