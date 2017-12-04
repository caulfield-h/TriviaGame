$(document).ready(function() {
    // Create a function that creates the start button and initial screen

    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Game</a></p>";
        $(".mainArea").html(startScreen);
    }

    initialScreen();

    //Create a function, generateHTML(), that is triggered by the start button, and generates the HTML seen on the project video...

    $("body").on("click", ".start-button", function(event) {
        event.preventDefault(); //added line to test issue on Github Viewer
        clickSound.play();
        generateHTML();
    })

    timeWrapper();

}); // Closes start-button click

$("body").on("click", ".answer", function(event) {
    //answerQuestion = true;
    clickSound.play();
    selectedAnswer = $(this).text();
    if (selectedAnswer === correctAnswers[questionCounter]) {
        //alert("correct!");

        clearInterval(theClock);
        generateWin();
    } else {
        //alert("wrong answer!");
        clearInterval(theClock);
        generateLoss();
    }
}); // Close .answer click

$("body").on("click", ".reset-button", function(event) {
        clickSoun.play();
        resetGame();
    }) // Closes reset-button click

}); //Closes jQuery wrapper

function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time! The correct answer was: " + correctAnswers[questionCounter] + "</p> + <img class='center-block img-wrong' src='assets/images/x.png'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); //change to 4000 or other amount
}