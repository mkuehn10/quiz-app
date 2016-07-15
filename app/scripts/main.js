$(function () {
    var currentQuestion;

    function initializeQuiz() {
        console.log("Initializing Page...");
        currentQuestion = 0;
        $('#intro-wrapper').show();
        $('#question-wrapper').hide();
    }

    function tutorialA() {
        $('#tutorial-one-a').show();
        $('#tutorial-one-b').show();
        $('#tutorial-one-c').show();
        $('#tutorial-button').show();
    };

    function tutorialB() {
        $('#tutorial-one-a h2').text('Click on the corresponding arrow.');
        $('#top-left').addClass('btn-success');
        $('#bottom-right').addClass('btn-success');
        $('#tutorial-one-b').animate({
            left: '355px',
            top: '245px'
        }, 1000, function() {
        });
        $('#tutorial-one-c').animate({
            top: '305px',
            right: '365px'
        }, 1000, function() {
        });
        $('#tutorial-button').click(tutorialC);
    }

    function tutorialC() {
        console.log("Tutorial C");
        $('#tutorial-one-a h2').text('Click on next to see if you were right.');
        $('#tutorial-one-b').animate({
            left: '988px',
            top: '450px',
            height: '150px',
            width: '150px'
        }, 1000, function() {
        });
        $('#tutorial-one-c').animate({
            top: '450px',
            left: '988px',
            height: '150px',
            width: '150px'
        }, 1000, function() {
        });
        $('#tutorial-button').click(tutorialD);
    }

    function tutorialD() {
        $('#tutorial-one-a').hide();
        $('#tutorial-one-b').hide();
        $('#tutorial-one-c').hide();
        $('#tutorial-button').addClass('btn-warning');
        $('#tutorial-button').text('Ready?')
        $('#tutorial-button').click(nextQuestion);
        $('.next-button').click(nextQuestion);
    }

    function showIntro() {
        console.log("Showing Introduction...");
        tutorialA();
        console.log(questions[currentQuestion].id);

    }

    function populateCurrentQuestion(question) {
        console.log("In populate");
    }

    function nextQuestion() {

        $('#tutorial-button').hide();
        currentQuestion += 1;
        populateCurrentQuestion(currentQuestion);
        $('.question-header').text('Question ' + currentQuestion);
    }
    function startQuiz() {
        console.log('In startQuiz()');
        $('#intro-wrapper').hide();

        $('#question-wrapper').show();
        showIntro();
    }



    $('.start-button').click(startQuiz);
    $('#tutorial-button').click(tutorialB);


    initializeQuiz();
});
