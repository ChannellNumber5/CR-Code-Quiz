var timerDiv = document.querySelector("#timer");
var rankDiv = document.querySelector("#ranking");
var h1El = document.querySelector("#headingText");
var quizContent = document.querySelector("#quizBody");

var timeOptions = [90, 60, 45];
var timeLeft;

function setQuiz {
    var easyLvl = document.querySelector("#lvlE")
}



var question1 = ["Question 1", "Answer1", "Answer2", "Answer3", "Answer4"];
var question2 = ["Question 2", "Answer1", "Answer2", "Answer3", "Answer4"];
var question3 = ["Question 3", "Answer1", "Answer2", "Answer3", "Answer4"];
var question4 = ["Question 4", "Answer1", "Answer2", "Answer3", "Answer4"];
var question5 = ["Question 5", "Answer1", "Answer2", "Answer3", "Answer4"];
var question6 = ["Question 6", "Answer1", "Answer2", "Answer3", "Answer4"];


function countdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerDiv.textContent = timeLeft + " seconds remaining";
        } else if (timeLeft === 1) {
            timerDiv.textContent = timeLeft + " second remaining";
        } else {
            timerDiv.textContent = " Time's Up!";
            clearInterval(timeInterval);
            displayScores();
            return;
        }
        timeLeft--;
    }, 1000);
}

function startQuiz() {

}

function displayScores() {

}

countdown();