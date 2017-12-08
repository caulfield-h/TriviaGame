$(document).ready(function() {
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Begin Quiz</a></p>"
        $(".mainArea").html(startScreen);
    }

    initialScreen();

    $("body").on("click", ".start-button", function(event) {
        event.preventDefault();
        clickSound.play();
        generateHTML();

        timerWrapper();
    })
})