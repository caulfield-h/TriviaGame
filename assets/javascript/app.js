// timer set to 30 seconds

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
    $('#bottom-container').hide();

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
        $('#clockCounter').html(count + ' Seconds');

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
        setInterval(countdown, 1000);
    }

    // function to run at game over
    function gameOver() {
        var questionOne = $('input:radio[name="questionOne"]:checked').val();
        var questionTwo = $('input:radio[name="questionTwo"]:checked').val();
        var questionThree = $('input:radio[name="questionThree"]:checked').val();
        var questionFour = $('input:radio[name="questionFour"]:checked').val();
        var questionFive = $('input:radio[name="questionFive"]:checked').val();
        var questionSix = $('input:radio[name="questionSix"]:checked').val();
        var questionSeven = $('input:radio[name="questionSeven"]:checked').val();
        var questionEight = $('input:radio[name="questionEight"]:checked').val();

        // change counts based on user response
        if (questionOne == undefined) {
            questionsRemaining++;
        } else if (questionOne == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionTwo == undefined) {
            questionsRemaining++;
        } else if (questionTwo == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionThree == undefined) {
            questionsRemaining++;
        } else if (questionThree == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionFour == undefined) {
            questionsRemaining++;
        } else if (questionFour == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionFive == undefined) {
            questionsRemaining++;
        } else if (questionFive == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionSix == undefined) {
            questionsRemaining++;
        } else if (questionSix == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionSeven == undefined) {
            questionsRemaining++;
        } else if (questionSeven == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
        if (questionEight == undefined) {
            questionsRemaining++;
        } else if (questionEight == "") {
            answeredCorrect++;
        } else {
            answeredIncorrect++;
        }
    }

})