$(document).ready(function() {

    // Global variables
    var totalQuiz = 10,
        answers = ["Cuba Libre", "The Fizzing Sound", "False", "True", "Pousse-Cafe", "Russia", "Mexico", "False", "A Very special type of wine", "Prohibition"],
        data = $("input"),
        correctAnswer = 0,
        incorrectAnswer = 0,
        blank = 0,
        count = 20;

    // for loop + if/else to match userGuess
    // true or false matches

        function scoreCount() {
            for (var i = 0; i < data.length; i++) {
            // if user selects an answer
            if(data[i].checked){

                // Check if user selcetion = array of answers, ++
                if(answers.indexOf(data[i].value) !== -1) {
                    correctAnswer++;
                } else {
                    incorrectAnswer++;
                }
            }
        }

    // check unanswered questions by subtracting if/else from above from the total number of questions

    var totalAnswered = correctAnswer + incorrectAnswer;
    console.log(totalAnswered);
    if(totalAnswered !== totalQuiz){
        blank = totalQuiz - totalAnswered;
}
    

    $("#correct").html(" " + correctAnswer);
    $("#incorrect").html(" " + incorrectAnswer);
    $("#blank").html(" " + blank);
}// end scoreCount

// show/hide events
// hide until click.play
$("#quiz, #results").hide();

// show questions & start timer
$("#play").click(function() {
    $("#start").hide("slow");
    $("#quiz").show("slow");
// timer:


var startTimer = setInterval (function(){
    count--;
    $("#countdown").html(count);

    // alert and show questions when time's up

    if(count === 0){
        clearInterval(timer);
        $("#quiz, #timer").hide("slow");
        $("results").show("slow");
        scoreCount();
        }
    }, 2000);
});
 
// Bottoms up (done) button brings up results page

$("#done").click(function(){
    $("#quiz, #timer").hide("slow");
    $("#results").show("slow");
    clearInterval(timer);
    scoreCount();
})

$("restart").click(function(){
    location.reload();
    });

});

