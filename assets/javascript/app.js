// timer set to 30 seconds
window.scrollTo(0, 500);
var timeLimit = 30 * 1000;
var count = 30;

// correct, incorrect, questions remaining

var answeredCorrect = 0;
var answeredIncorrect = 0;
var questionsRemaining = 0;

// Game Logic

// on page load* 

$(document).ready(function() {
    //time runs out at 30 seconds

    // initialize game with html and keep hidden at start

    $('#center-container').hide();
    $('#final-container').hide();

    $('#startGame').on("click", function() {
        // hide the initial screen from player
        $('#start-screen').hide();
        // show the game screen
        $('#center-container').show();

        beginTimer();
        return;
    });

    // the timer
    function timerCount() {
        // reduce the counter by 1
        count--;
        // display the current time to player in the html
        $('#timer-seconds').html(count + ' Seconds');

        // timeOut functionality cases*
        // if finished before time is up
        $('#cancel-button').on('click', function() {
            count = 0;
            return;
        });

        // game over if timer reaches zero
        if (count == -1) {
            gameOver()
            $('#center-container').hide();
        }

    }

    function beginTimer() {
        setInterval(timerCount, 1000);
    }

    // function to run at game over
    function gameOver() {
        var questionOne = $('input:radio[name="questOne"]:checked').val();
        var questionTwo = $('input:radio[name="questTwo"]:checked').val();
        var questionThree = $('input:radio[name="questThree"]:checked').val();
        var questionFour = $('input:radio[name="questFour"]:checked').val();
        var questionFive = $('input:radio[name="questFive"]:checked').val();
        var questionSix = $('input:radio[name="questSix"]:checked').val();
        var questionSeven = $('input:radio[name="questSeven"]:checked').val();
        var questionEight = $('input:radio[name="questEight"]:checked').val();

        // change counts based on user response
        if (questionOne == undefined) {
            questionsRemaining++;
        } else if (questionOne == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionTwo == undefined) {
            questionsRemaining++;
        } else if (questionTwo == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionThree == undefined) {
            questionsRemaining++;
        } else if (questionThree == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionFour == undefined) {
            questionsRemaining++;
        } else if (questionFour == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionFive == undefined) {
            questionsRemaining++;
        } else if (questionFive == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionSix == undefined) {
            questionsRemaining++;
        } else if (questionSix == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionSeven == undefined) {
            questionsRemaining++;
        } else if (questionSeven == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionEight == undefined) {
            questionsRemaining++;
        } else if (questionEight == "right") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }

        // display updated tallies

        $('#correct-answers').html(answeredCorrect);
        $('#wrong-answers').html(answeredIncorrect);
        $('#left-blank').html(questionsRemaining);

        // display end score area

        $('#final-container').show();
        window.scrollTo(0, 550);
    }


});