var timerDiv = document.querySelector("#timer");
var rankList = document.querySelector("#rankingList");
var h1El = document.querySelector("#headingText");
var quizBody = document.querySelector("#quizBody");
var pText = document.querySelector("#pText");
var leaderBoard = [];
var score = 0;

var quizQuestions = {
    question1: ["Question 1", "Option1", "Option2", "Option3", "Option4", "Option1"],
    question2: ["Question 2", "Option1", "Option2", "Option3", "Option4", "Option1"],
    question3: ["Question 3", "Option1", "Option2", "Option3", "Option4", "Option1"],
    question4: ["Question 4", "Option1", "Option2", "Option3", "Option4", "Option1"],
    question5: ["Question 5", "Option1", "Option2", "Option3", "Option4", "Option1"],
    question6: ["Question 6", "Option1", "Option2", "Option3", "Option4", "Option1"]
}
var button1;
var button2;
var button3;
var button4;
var question;

var timeLeft = 0;;
var answer;
var questionCounter = 0;
var currentQuestion;

function init() {
    var startQuizButton = document.querySelector("#startQuiz");
    startQuizButton.addEventListener("click", function() {
    createQuestionButtons();
    quizBody.style.display = "none";
    setTime();
    startQuiz();
    });

}

// function init() {
//     const easyLvl = document.querySelector("#button1");
//     const medLvl = document.querySelector("#button2");
//     const hardLvl = document.querySelector("#button3");
//     const startQuizButton = document.querySelector("#button4");
//     easyLvl.addEventListener("click", function() {
//         timeLeft = 90;
//         console.log(timeLeft);
//         });
//     medLvl.addEventListener("click", function() {
//         timeLeft = 60;
//         console.log(timeLeft);
//         });
//     hardLvl.addEventListener("click", function() {
//         timeLeft = 45;
//         console.log(timeLeft);
//         });
//     startQuizButton.addEventListener("click", function() {
//         if (timeLeft === 0) {
//             alert("Please select Difficulty Level");
//         } else {
//         startQuiz();
//         return;
//         }
//     });

// }

function startQuiz() {
    countdown();
    loadQuestion(questionCounter);
    
    button1.addEventListener("click", function() {
        if (currentQuestion[1] === currentQuestion[5]) {
            score ++;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button2.addEventListener("click", function() {
        if (currentQuestion[2]  === currentQuestion[5]) {
            score ++;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button3.addEventListener("click", function() {
        if (currentQuestion[3]  === currentQuestion[5]) {
            score ++;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button4.addEventListener("click", function() {
        if (currentQuestion[4] === currentQuestion[5]) {
            score ++;
        } else {
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });
   
}

function createQuestionButtons() {
    // var buttonDiv = document.createElement("div");
    question = document.createElement("h1");
    document.querySelector("#displayQuiz").appendChild(question);
    button1 = document.createElement("button");
    document.querySelector("#displayQuiz").appendChild(button1);
    button2 = document.createElement("button");
    document.querySelector("#displayQuiz").appendChild(button2);
    button3 = document.createElement("button");
    document.querySelector("#displayQuiz").appendChild(button3);
    button4 = document.createElement("button");
    document.querySelector("#displayQuiz").appendChild(button4);
    // document.querySelector("#displayQuiz").appendChild(buttonDiv);
}

function loadQuestion(num) {
    if (num === quizQuestions.key().length()) {
        endQuiz();
    } else {
        currentQuestion = Object.values(quizQuestions)[num];
        question.textContent = currentQuestion[0];
        button1.textContent = currentQuestion[1];
        button2.textContent = currentQuestion[2];
        button3.textContent = currentQuestion[3];
        button4.textContent = currentQuestion[4];
    // }
}

// function createButtons (totalButtons) {
//     for (let i=0; i<totalButtons; i++) {
//         document.createElement("button");
//     }
// }

function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerDiv.textContent = timeLeft + " seconds remaining";
        } else if (timeLeft === 1) {
            timerDiv.textContent = timeLeft + " second remaining";
        } else {
            timerDiv.textContent = " Time's Up!";
            clearInterval(timeInterval);
            endQuiz();
            return;
        }
        timeLeft--;
    }, 1000);
}

function setTime () {
    let userInput = prompt("Please select Difficulty Level", "easy, medium, or hard");
    let difLvl = userInput.toUpperCase();
     if (difLvl === "HARD") {
        timeLeft = 45;
    } else if (difLvl === "MEDIUM") {
        timeLeft = 60;
    } else {
        timeLeft = 90;
    }
}
//returns random number within range given

function randomNumber (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function endQuiz() {
let userName = prompt("Input your initials for our leaderboard!");
if (userName === " ") {
    userName = prompt("Input your initials for our leaderboard!");
} else {
    var currentUserScore = userName.concat(": ", score);
    leaderBoard.push(currentUserScore);
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
    var playAgain = confirm("Would you like to take the quiz again? Hit 'Ok' to play or 'cancel' to end");
    if (playAgain) {
        score = 0;
        questionCounter = 0;
        setTime();
        startQuiz();
        
    } else {
        alert("Thank you for playing!");
    }
    return;
}  
}

function loadScore() {
leaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));
var displayLeaderBoard = leaderBoard.order();
for (var i=0; i < displayLeaderBoard.length(); i++) {
    
}
}

init();

