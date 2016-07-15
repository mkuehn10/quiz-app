$(function () {
    'use strict';
    var currentQuestion;
    var userAnswer;
    var currentAnswer;
    var resultTracker;

    initializeQuiz();

    function initializeQuiz() {
        currentQuestion = 0;
        userAnswer = [];
        currentAnswer = [];
        resultTracker = [];
        $('#intro-wrapper').show();
        $('#question-wrapper').hide();
        $('#results-wrapper').hide();
        setupQuestionWrapper(currentQuestion);
    }

    function setupQuestionWrapper(question) {
        var current = questions[question];
        if (currentQuestion === 0) {
            $('.question-header').text('Tutorial Question');
            disableButtons();
            $('#tutorial-button').removeClass('btn-warning');
            $('#tutorial-button').text('Continue');
        } else {
            $('.question-header').text('Question ' + currentQuestion);
        }

        $('#nameOne').text(questions[question].nameOne);
        $('#nameTwo').text(questions[question].nameTwo);
        $('#imageOne').attr('src', current.imageOne);
        $('#imageTwo').attr('src', current.imageTwo);

    }

    $('.start-button').off('click').on('click', startQuiz);
    $('.restart-button').off('click').on('click', initializeQuiz);

    function startQuiz() {
        $('#intro-wrapper').hide();
        $('#results-wrapper').hide();
        $('#question-wrapper').show();
        showIntro();
    }

    function tutorialA() {
        $('#tutorial-one-a').show();
        $('#tutorial-button').show();
        $('#skip-button').show();
        $('#skip-button').off('click').on('click', nextQuestion);
        $('#tutorial-button').off('click').on('click', tutorialB);
    }

    function tutorialB() {
        $('#tutorial-one-a h3').text('Click on the corresponding arrow.');
        $('#top-left').removeClass('btn-danger');
        $('#top-left').addClass('btn-success');
        $('#bottom-right').removeClass('btn-danger');
        $('#bottom-right').addClass('btn-success');
        $('#tutorial-button').off('click').on('click', tutorialC);
    }

    function tutorialC() {
        console.log('Tutorial C');
        $('.next-button').show();
        $('#tutorial-one-a h3').text('Click on the right arrow to see if you were right.');
        $('#tutorial-one-b').hide();
        $('#tutorial-button').off('click').on('click', tutorialD);
    }

    function tutorialD() {
        $('#tutorial-one-a h3').text('Click on ready to continue.');
        // $('#tutorial-one-b').hide();
        // $('#tutorial-one-c').hide();
        $('#skip-button').hide();
        $('#tutorial-button').addClass('btn-warning');
        $('#tutorial-button').text('Ready!');
        $('#tutorial-button').off('click').on('click', nextQuestion);
        $('.next-button').off('click').on('click', nextQuestion);
    }

    function showIntro() {
        $('.next-button').hide();
        tutorialA();
    }

    function populateCurrentQuestion(question) {
        // console.log('pop Current: ' + currentQuestion);
        var current = questions[question];
        $('.question-header').text('Question ' + currentQuestion);
        $('#nameOne').text(questions[question].nameOne);
        $('#nameTwo').text(questions[question].nameTwo);
        $('#imageOne').attr('src', current.imageOne);
        $('#imageTwo').attr('src', current.imageTwo);
        currentAnswer = questions[question].correctAnswer;
        $('.next-button').off('click').on('click', resultsQuestion);
    }

    function resultsQuestion() {
        $('.question-header').text('Question ' + currentQuestion + ' Results');
        if (currentAnswer[0] == userAnswer[0]) {
            $('#results-box').css('background-color', 'green');
            $('#results-box h3').text('Correct!');
            resultTracker.push(true);
        } else {
            $('#results-box').css('background-color', 'crimson');
            $('#results-box h3').text('Incorrect!');
            resultTracker.push(false);
        }
        $('#results-box').show();
        $('.next-button').off('click').on('click', nextQuestion);
        disableButtons();
        userAnswer = [];
    }

    function disableButtons () {
        $('#top-left').off('click');
        $('#top-right').off('click');
        $('#bottom-left').off('click');
        $('#bottom-right').off('click');
    }

    function resetButtons() {
        $('#top-left').removeClass('btn-success');
        $('#top-right').removeClass('btn-success');
        $('#bottom-left').removeClass('btn-success');
        $('#bottom-right').removeClass('btn-success');
        $('#top-left').addClass('btn-danger');
        $('#top-right').addClass('btn-danger');
        $('#bottom-left').addClass('btn-danger');
        $('#bottom-right').addClass('btn-danger');
    }
    function nextQuestion() {
        $('#tutorial-one-a').hide();
        $('#results-box').hide();
        $('.next-button').show();
        $('.next-button').off('click').on('click', nextQuestion);
        $('#skip-button').hide();
        $('#tutorial-button').hide();
        resetButtons();
        $('#top-left').off('click').on('click', buttonClicked);
        $('#top-right').off('click').on('click', buttonClicked);
        $('#bottom-left').off('click').on('click', buttonClicked);
        $('#bottom-right').off('click').on('click', buttonClicked);
        currentQuestion++;
        if (currentQuestion <= 5) {
            populateCurrentQuestion(currentQuestion);
        } else {
            // console.log('Go to Results page now!');
            $('#question-wrapper').hide();
            $('#results-wrapper').show();
            displayResults();
        }
    }

    function displayResults() {
        console.log(resultTracker.length);
        var score = 0;
        resultTracker.forEach(function(result, n) {
            console.log(n);
            var mark = '';
            if (result) {
                mark = '<span class="correct">✓</span>';
                score++;
            } else {
                mark = '<span class="incorrect">✗</span>';
            }

            $('.q' + (n + 1)).html('Question ' + (n + 1) + ': ' + mark);
        });
        $('.overall').text(score + '/5  ' + ((score / 5) * 100) + '%');
    }
    function buttonClicked() {
        $(event.target).closest('button').removeClass('btn-danger');
        $(event.target).closest('button').addClass('btn-success');
        var clickedOn = $(event.target).closest('button').attr('id');
        // console.log(clickedOn);
        switch (clickedOn) {
            case 'top-left':
            {
                $('#top-right').removeClass('btn-success');
                $('#top-right').addClass('btn-danger');
                $('#bottom-left').removeClass('btn-success');
                $('#bottom-left').addClass('btn-danger');

                $('#bottom-right').addClass('btn-success');
                $('#bottom-right').removeClass('btn-danger');
                userAnswer = [0, 3];
                break;
            }
            case 'bottom-left':
            {
                $('#top-left').removeClass('btn-success');
                $('#top-left').addClass('btn-danger');
                $('#bottom-right').removeClass('btn-success');
                $('#bottom-right').addClass('btn-danger');

                $('#top-right').addClass('btn-success');
                $('#top-right').removeClass('btn-danger');
                userAnswer = [1, 2];
                break;
            }
            case 'top-right':
            {
                $('#top-left').removeClass('btn-success');
                $('#top-left').addClass('btn-danger');
                $('#bottom-right').removeClass('btn-success');
                $('#bottom-right').addClass('btn-danger');

                $('#bottom-left').addClass('btn-success');
                $('#bottom-left').removeClass('btn-danger');
                userAnswer = [1, 2];
                break;
            }
            case 'bottom-right':
            {
                $('#top-right').removeClass('btn-success');
                $('#top-right').addClass('btn-danger');
                $('#bottom-left').removeClass('btn-success');
                $('#bottom-left').addClass('btn-danger');

                $('#top-left').addClass('btn-success');
                $('#top-left').removeClass('btn-danger');
                userAnswer = [0, 3];
                break;
            }
            default:
            {
                console.log('Something went wrong!');
            }
        }
    }
});
