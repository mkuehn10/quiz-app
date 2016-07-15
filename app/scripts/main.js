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
        //$('#tutorial-one-b').show();
        //$('#tutorial-one-c').show();
        $('#tutorial-button').show();
        $('#tutorial-button').click(tutorialB);
    };

    function tutorialB() {
        $('#tutorial-one-a h2').text('Click on the corresponding arrow.');
        $('#top-left').addClass('btn-success');
        $('#bottom-right').addClass('btn-success');
        // $('#tutorial-one-b').animate({
        //     left: '205px',
        //     top: '70px'
        // }, 1000, function() {
        // });
        // $('#tutorial-one-c').animate({
        //     top: '130px',
        //     right: '215px'
        // }, 1000, function() {
        // });

        $('#tutorial-button').click(tutorialC);
    }

    function tutorialC() {
        console.log("Tutorial C");
        $('#tutorial-one-a h2').text('Click on next to see if you were right.');
        // $('#tutorial-one-b').animate({
        //     left: '835px',
        //     top: '275px',
        //     height: '150px',
        //     width: '150px'
        // }, 1000, function() {
        // });
        $('#tutorial-one-b').hide();
        // $('#tutorial-one-c').animate({
        //     top: '275px',
        //     right: '10px',
        //     height: '150px',
        //     width: '150px'
        // }, 1, function() {

        // });
        $('#tutorial-one-c').show();
        $('#tutorial-button').click(tutorialD);

    }

    function tutorialD() {
        // console.log(event);
        $('#tutorial-one-a').hide();
        $('#tutorial-one-b').hide();
        $('#tutorial-one-c').hide();
        $('#tutorial-button').addClass('btn-warning');
        $('#tutorial-button').text('Ready?')
        $('#tutorial-button').click(nextQuestion);
        $('.next-button').off('click').on('click', nextQuestion);
    }

    function showIntro() {
        console.log("Showing Introduction...");
        tutorialA();
        console.log(questions[currentQuestion].id);

    }

    function populateCurrentQuestion(question) {
        console.log("pop Current: " + currentQuestion);
        var current = questions[question];
        $('.question-header').text('Question ' + currentQuestion);
        $('#nameOne').text(questions[question].nameOne);
        $('#nameTwo').text(questions[question].nameTwo)
        $('#imageOne').attr('src', current.imageOne);
        $('#imageTwo').attr('src', current.imageTwo);
    }

    function nextQuestion() {
        $('#tutorial-button').hide();
        $('#top-left').removeClass('btn-success');
        $('#top-right').removeClass('btn-success');
        $('#bottom-left').removeClass('btn-success');
        $('#bottom-right').removeClass('btn-success');
        currentQuestion++;
        if (currentQuestion <= 5) {
            populateCurrentQuestion(currentQuestion);
        } else {
            console.log("Go to Results page now!");
            $('#question-wrapper').hide();
            $('#results-wrapper').show();
        }



    }

    function startQuiz() {
        console.log('In startQuiz()');
        $('#intro-wrapper').hide();
        $('#question-wrapper').show();
        showIntro();
    }
    $('.start-button').click(startQuiz);
    initializeQuiz();
});
