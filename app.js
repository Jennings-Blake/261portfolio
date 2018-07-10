function populate() {
    if(quiz.isEnded()) {
        //showScores();
    }    
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    
        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    
        showProgress();
    }
};

function guess(id, guess)  {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of "  + quiz.questions.length;
};

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("How many strikes make a perfect game in bowling?", ["8", "10", "12", "13"], "12"),
    new Question("Who won the 2015 World Series?", ["Yankees", "Cubs", "Royals", "Diamondbacks"], "Royals",                                                )
    ,new Question("Who won Super Bowl 52?", ["Giants", "Raiders", "Patriots", "Eagles"], "Eagles"),  
    new Question("What sport did John Daly play?", ["Tennis", "Golf", "Soccer", "Baseball"], "Golf"),
    new Question("What year did the USA skip the Olympics?", ["1898", "1964", "1980", "1996"], "1980"),
];

var quiz = new Quiz(questions);

populate();