const quizQuestions = [
  {
    question: "Which of the following is a primitive data type in JavaScript?",
    choices: ["Object", "Array", "String", "Function"],
    answer: "String",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["let", "const", "var", "all of the above"],
    answer: "all of the above",
  },
  {
    question:
      "Which method is used to add a new element to the end of an array in JavaScript?",
    choices: ["shift()", "unshift()", "push()", "pop()"],
    answer: "push()",
  },
  {
    question:
      "Which statement is used to terminate a switch statement in JavaScript?",
    choices: ["break", "continue", "return", "exit"],
    answer: "break",
  },
  {
    question:
      "Which function is used to convert a a string to a number in JavaScript?",
    choices: ["parseInt()", "parseFloat()", "toNumber()", "toString()"],
    answer: "parseInt()",
  },
  {
    question:
      "Which operator is used to concatenate two strings in JavaScript?",
    choices: ["+", "-", "*", "/"],
    answer: "+",
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    choices: ["shift()", "unshift()", "push()", "pop()"],
    answer: "pop()",
  },
  {
    question:
      "Which function is used to generate a random number between 0 and 1 in JavaScript?",
    choices: [
      "random()",
      "randomNumber()",
      "Math.random()",
      "Math.randomNumber()",
    ],
    answer: "Math.random()",
  },
  {
    question: "Which keyword is used to declare a function in JavaScript?",
    choices: ["func", "function", "def", "define"],
    answer: "function",
  },
  {
    question:
      "Which operator is used to strictly compare two values in JavaScript?",
    choices: ["=", "==", "===", "!="],
    answer: "===",
  },
];

//-------------------------------------

//Hides End Screen on Start
var hideEndScreen = document.getElementById("end-screen");
hideEndScreen.style.display = "none";

//Countdown timer
var timerEl = document.getElementById("timer");
//Change timeLeft back to 100 when complete
var timeLeft = 100;

function updateTimer() {
  var timerInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endScreen();
      return;
    }
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
  }, 1000);
}
//Starts timer
var startButton = document.querySelector("#start-btn");
var quizInstructions = document.querySelector("#quiz-instructions");
var finalScore = document.getElementById("final-score");

startButton.addEventListener("click", function () {
  updateTimer();
  //Hide start button and quiz instructions
  startButton.style.display = "none";
  quizInstructions.style.display = "none";
  //Populates quiz questions once function is complete
  populateQuiz();
});

//Populate the quiz questions
var quizContainer = document.getElementById("quiz-container");
var questionsContainer = document.getElementById("questions-container");
var choicesContainer = document.getElementById("choices-container");
var currentQuestion = 0;

function populateQuiz() {
  questionsContainer.textContent = quizQuestions[currentQuestion].question;

  //add CSS class
  questionsContainer.classList.add("questions-container");
  choicesContainer.classList.add("choices-container");

  //remove previous choices
  while (choicesContainer.firstChild) {
    choicesContainer.removeChild(choicesContainer.firstChild);
  }
  //make choice buttons
  quizQuestions[currentQuestion].choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.innerHTML = choice;
    choiceButton.classList.add("choice-button");

    //check if correct
    if (choice === quizQuestions[currentQuestion].answer) {
      choiceButton.dataset.isCorrect = true;
    }

    choiceButton.addEventListener("click", function () {
      var buttons = document.querySelectorAll(".choice-button");
      //prevent other buttons from being pressed during time delay
      buttons.forEach(function (button) {
        button.disabled = true;
      });
      //Turns choice button green if correct/Red if wrong while also turning correct item green
      if (this.dataset.isCorrect) {
        this.classList.add("correct");
      } else {
        this.classList.add("incorrect");

        var correctButton = document.querySelector(
          ".choice-button[data-is-correct=true]"
        );
        correctButton.classList.add("correct");
        //time deduction for wrong answer
        timeLeft -= 10;
      }
      setTimeout(goToNextQuestion, 1000);
    });
    choicesContainer.appendChild(choiceButton);
  });
}

function goToNextQuestion() {
  currentQuestion++;

  if (currentQuestion === quizQuestions.length) {
    endScreen();
  } else {
    populateQuiz();
  }
}

//End Screen Code
function endScreen() {
  //Code to switch to end screen when timer is finished
  hideEndScreen.style.display = "";
  finalScore.textContent = timeLeft;
  quizContainer.style.display = "none";
  timerEl.style.display = "none";
}

//Store users score and initial to return on highscores page

var submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  var initialsInput = document.getElementById("initials-input");
  var initials = initialsInput.value.trim();
  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var newScore = {
      initials: initials,
      score: timeLeft,
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.replace("high-score.html");
    window.location.assign = "/high-score.html";
  }
});

