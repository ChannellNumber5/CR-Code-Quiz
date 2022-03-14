var timerDiv = document.querySelector("#timer");
var rankDiv = document.querySelector("#ranking");
var h1El = document.querySelector("#headingText");
var quizContent = document.querySelector("#quizBody");
var easyLvl = document.querySelector("#lvlE");
var medLvl = document.querySelector("#lvlM");
var hardLvl = document.querySelector("#lvlH");
var startQuizButton = document.querySelector("#startQuiz");

var timeLeft;

easyLvl.addEventListener("click", function() {
     timeLeft = 90;
    console.log(timeLeft);
    });
medLvl.addEventListener("click", function() {
    timeLeft = 60;
    console.log(timeLeft);
    });
hardLvl.addEventListener("click", function() {
    timeLeft = 45;
    console.log(timeLeft);
    });
startQuizButton.addEventListener("click", function() {
    startQuiz();
});


function startQuiz() {
    countdown();
    var question1 = ["Question 1", "Answer1", "Answer2", "Answer3", "Answer4"];
    var question2 = ["Question 2", "Answer1", "Answer2", "Answer3", "Answer4"];
    var question3 = ["Question 3", "Answer1", "Answer2", "Answer3", "Answer4"];
    var question4 = ["Question 4", "Answer1", "Answer2", "Answer3", "Answer4"];
    var question5 = ["Question 5", "Answer1", "Answer2", "Answer3", "Answer4"];
    var question6 = ["Question 6", "Answer1", "Answer2", "Answer3", "Answer4"];
    for (var i = 0; i<= 6; i++) {
        h1El.textContent = question1[0];
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
            displayScores();
            return;
        }
        timeLeft--;
    }, 1000);
}



function displayScores() {
    
}

