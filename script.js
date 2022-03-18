var timerDiv = document.querySelector("#timer");
var rankList = document.querySelector("#rankingList");
var quizBody = document.querySelector("#quizBody");
var pText = document.querySelector("#pText");
var scoreList = document.querySelector("#ranking");
var leaderBoard = [];


var quizQuestions = {
    question1: ["What is the difference between 'let', 'var' and 'const'?", "1 - Nothing, they are all used for declaring variables", "2 - var declares a variable that can be used throughout your JS file (following local and global rules), while let and const can only be used in the block in which they are declared and the value of const cannot be changed", "3 - Var is for a variable, let is for a letter and const is for a constant", "4 - Options 2 and 3", "2 - var declares a variable that can be used throughout your JS file (following local and global rules), while let and const can only be used in the block in which they are declared and the value of const cannot be changed"],
    question2: ["What method is used to turn objects into strings to be stored in localStorage?", "1- .Stringles()", "2- .turnToString", "3- .stringCheeseMe", "4- JSON.stringify()", "4- JSON.stringify()"],
    question3: ["What code should be inserted here .document.querySelector(__) to select the class 'fancy'?", "1- '.fancy'", "2- '#fancy'", '3- "fancy"', "4- '$fancy'", "1- '.fancy'"],
    question4: ["What is one of the function that is offered by the Web API to run a timer on our webpage?", "1- setTime()", "2- runTime()", "3- setInterval()", "4- SetInterval()", "3- setInterval()"],
    question5: ["What method should be used to assign this element <p id='myParagraph'></p> to the variable 'para1'?", "1- var para = document.querySelector('#myParagraph')", "2- var para = document.getElementByID('myParagraph')", "3- var para  = document.get(#myParagraph)", "4- Both Options 1 and 2", "4- Both Options 1 and 2"],
    question6: ["If I want a function to iterate a certain number of times, what sort of loop should I use?", "1- A Do-While Loop", "2- An Iterating Loop", "3- A Wait-For Loop", "4- A for loop", "4- A for loop"]
}

var button1;
var button2;
var button3;
var button4;
var question;
var feedback;

var timeLeft = 0;;
var answer;
var questionCounter = 0;
var currentQuestion;
var score = 0;

function init() {
    var startQuizButton = document.querySelector("#startQuiz");
    startQuizButton.addEventListener("click", function() {
    createQuestionButtons();
    quizBody.style.display = "none";
    setTime();
    startQuiz();
    });

}

function startQuiz() {
    countdown();
    loadQuestion(questionCounter);
    
    button1.addEventListener("click", function() {
        if (currentQuestion[1] === currentQuestion[5]) {
            score ++;
            feedback.setAttribute("style", "color: green; font-style: italic");
            feedback.textContent = "Correct!"
        } else {
            feedback.setAttribute("style", "color: red; font-style: italic");
            feedback.textContent = "Wrong!"
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button2.addEventListener("click", function() {
        if (currentQuestion[2]  === currentQuestion[5]) {
            score ++;
            feedback.setAttribute("style", "color: green; font-style: italic");
            feedback.textContent = "Correct!"
        } else {
            feedback.setAttribute("style", "color: red; font-style: italic");
            feedback.textContent = "Wrong!"
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button3.addEventListener("click", function() {
        if (currentQuestion[3] === currentQuestion[5]) {
            score ++;
            feedback.setAttribute("style", "color: green; font-style: italic");
            feedback.textContent = "Correct!"
        } else {
            feedback.setAttribute("style", "color: red; font-style: italic");
            feedback.textContent = "Wrong!"
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });

    button4.addEventListener("click", function() {
        if (currentQuestion[4] === currentQuestion[5]) {
            score ++;
            feedback.setAttribute("style", "color: green; font-style: italic");
            feedback.textContent = "Correct!"
        } else {
            feedback.setAttribute("style", "color: red; font-style: italic");
            feedback.textContent = "Wrong!"
            timeLeft = timeLeft - 5;
        }
        questionCounter ++;
        loadQuestion(questionCounter);
    });
   
}

function createQuestionButtons() {
    question = document.createElement("h1");
    document.querySelector("#quizDisplay").appendChild(question);
    button1 = document.createElement("button");
    document.querySelector("#quizDisplay").appendChild(button1);
    button2 = document.createElement("button");
    document.querySelector("#quizDisplay").appendChild(button2);
    button3 = document.createElement("button");
    document.querySelector("#quizDisplay").appendChild(button3);
    button4 = document.createElement("button");
    document.querySelector("#quizDisplay").appendChild(button4);
    feedback = document.createElement("h2");
    document.querySelector("#quizDisplay").appendChild(feedback);
}

function loadQuestion(num) {
    let quiz = Object.keys(quizQuestions);
    if (num === quiz.length) {
        timerDiv.textContent = "Finished before time end!";
        endQuiz();
    } else {
        currentQuestion = Object.values(quizQuestions)[num];
        question.textContent = currentQuestion[0];
        button1.textContent = currentQuestion[1];
        button2.textContent = currentQuestion[2];
        button3.textContent = currentQuestion[3];
        button4.textContent = currentQuestion[4];
    }
}

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

        if (questionCounter === Object.keys(quizQuestions).length) {
            timerDiv.textContent = "Finished before time end!";
            return;
        } else {
        timeLeft--;
        }
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
//Will use random number generator function in future to add randomizing quiz questions so that the same order isn't used each time.
// function randomNumber (min,max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

function endQuiz() {
    document.querySelector("#quizDisplay").style.display = "none";
    var scoreDiv = document.createElement("div");
    scoreDiv.setAttribute("style", "margin: auto; text-align:center; padding: 10%");
    var endText = document.createElement("h2");
    if (score > 1) {
        endText.textContent = "You got " + score + " questions correct!<br>Enter your initials for our leaderboard!";
    } else if (score === 1) {
        endText.textContent = "You got " + score + " questions correct!<br>Enter your initials for our leaderboard!";
    } else {    
        endText.textContent = "You got " + score + " questions correct!<br>Enter your initials for our leaderboard!";
    }
    scoreDiv.appendChild(endText);
    var scoreForm = document.createElement("form");
    var initialInput = document.createElement("input");
    scoreForm.appendChild(initialInput);
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit to Leaderboard";
    scoreForm.appendChild(submitButton);
    scoreDiv.appendChild(scoreForm);
    document.body.appendChild(scoreDiv);

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        let userName = initialInput.value.trim();
        if (userName.value === " " || userName.value === "") {
            userName = prompt("Please Input your initials for our leaderboard!");
        } else {
            var currentUserScore = userName.concat(": ", score);
            leaderBoard.push(currentUserScore);
            localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
            var playAgain = confirm("Would you like to take the quiz again? Hit 'Ok' to play or 'cancel' to end");
            if (playAgain) {
                location.reload();
            } else {
                alert("Thank you for playing!");
                loadScore();
            }
            return;
        }  
    })

}

function loadScore() {
leaderBoard = JSON.parse(localStorage.getItem("leaderBoard"));
var displayLeaderBoard = leaderBoard.sort();
for (var i=0; i < displayLeaderBoard.length; i++) {
    var rankItem = document.createElement("li");
    rankItem.textContent = displayLeaderBoard[i];
    rankList.appendChild(rankItem);
}
document.querySelector("#rankingList").style.visibility = "hidden";
}

function displayScores() {
    scoreList.addEventListener("click", function() {
        if (rankingList.getAttribute("data-state") === "hidden") {
            ranking.textContent = "Hide Leaderboard:"
            rankingList.setAttribute("data-state", "visible");
            document.querySelector("#rankingList").style.visibility = "visible";
        } else {
            document.querySelector("#rankingList").style.visibility = "hidden";
            ranking.textContent = "Show Leaderboard:"
            rankingList.setAttribute("data-state", "hidden");
        }
     })
}

init();
loadScore();
displayScores();