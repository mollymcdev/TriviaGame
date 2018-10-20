
$(document).ready(function () {

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;

    var timeLeft = 60;
    var intervalId;

    $("#quiz").hide();
    $("#results").hide();

    //functions

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        timeLeft--;
        $("#timer").html(timeLeft);

        if (timeLeft === 0) {
            clearInterval(intervalId);
            $("#quiz").hide();
            $("#timer").hide();
            $("h2").html("Time's Up!");
            $("#results").show();
            displayResults();

        }
    };


    function displayResults() {

        $("#correctAnswers").text("Correct: " + correctAnswers);
        $("#incorrectAnswers").text("Incorrect: " + incorrectAnswers);
        $("#unanswered").text("Unanswered: " + unansweredQuestions);

    };

    //click handlers

    $("[name='question1']").one("click", function checkCorrect() {

        var response1 = $("[name = 'question1']");
       

        if (response1[1].checked) {
            correctAnswers++;
            console.log("correct:" + correctAnswers);
            console.log("unanswered: " + unansweredQuestions)
        } else if (response1[0].checked || response1[2].checked) {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers)
            console.log("unanswered: " + unansweredQuestions)
        } 

    });

    $("[name='question2']").one("click", function checkCorrect() {

        var response2 = $("[name = 'question2']");
       

        if (response2[0].checked) {
            correctAnswers++;
            console.log("correct:" + correctAnswers);
            console.log("unanswered: " + unansweredQuestions)
        } else if (response2[1].checked || response2[2].checked) {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers)
            console.log("unanswered: " + unansweredQuestions)
        } 

    });

    $("[name='question3']").one("click", function checkCorrect() {

        var response3 = $("[name = 'question3']");
       

        if (response3[0].checked) {
            correctAnswers++;
            console.log("correct:" + correctAnswers);
            console.log("unanswered: " + unansweredQuestions)
        } else if (response3[1].checked || response3[2].checked) {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers)
            console.log("unanswered: " + unansweredQuestions)
        } 

    });

    $("[name='question4']").one("click", function checkCorrect() {

        var response4 = $("[name = 'question4']");
       

        if (response4[2].checked) {
            correctAnswers++;
            console.log("correct:" + correctAnswers);
            console.log("unanswered: " + unansweredQuestions)
        } else if (response4[0].checked || response4[1].checked) {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers)
            console.log("unanswered: " + unansweredQuestions)
        } 

    });

    $("[name='question5']").one("click", function checkCorrect() {

        var response5 = $("[name = 'question5']");
       

        if (response5[2].checked) {
            correctAnswers++;
            console.log("correct:" + correctAnswers);
            console.log("unanswered: " + unansweredQuestions)
        } else if (response5[0].checked || response5[1].checked) {
            incorrectAnswers++;
            console.log("incorrect: " + incorrectAnswers)
            console.log("unanswered: " + unansweredQuestions)
        } 

    });




    $("#startButton").click(function () {
        $("#quiz").show();
        run();


    });

    $("#doneButton").click(function () {
        $("#quiz").hide();
        $("#results").show();
        $("#startButton").hide();
        $("#timer").hide();
        $("h2").html("You Finished!");
        displayResults();
    });


});
