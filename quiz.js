var questions = [
    {
        question: "How do I work for?",
        answers: {
            a: "Commander",
            b: "Luke",
            c: "George"
        },
        correctAnswer: "a"
    },
    {
        question: "Why was Gilead founded?",
        answers: {
            a: "To create a new country",
            b: "To increase birth rates",
            c: "To control women"
        },
        correctAnswer: "b"
    },
    {
        question: "What do handmaids do?",
        answers: {
            a: "Take care of hands",
            b: "Produce babies for the elite",
            c: "Take care of babies of the elite"
        },
        correctAnswer: "b"
    },
    {
        question: "How many children do I have?",
        answers: {
            a: "1",
            b: "2",
            c: "3"
        },
        correctAnswer: "a"
    },
];

window.addEventListener("DOMContentLoaded", function () {
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    generateQuiz(questions, quizContainer, resultsContainer, submitButton);
});


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
    
    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
	    var output = [];
	    var answers;

	    // for each question...
	    for (var i=0; i<questions.length; i++) {
            
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for (letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
	    // finally combine our output list into one string of html and put it on the page
	    quizContainer.innerHTML = output.join('');
	}

    function showResults(questions, quizContainer, resultsContainer) {
                
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for (var i = 0; i < questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer === questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
        // show number of correct answers out of total
        resultsContainer.innerHTML += "You got a " + numCorrect + " / " + questions.length + "!\n That is a " + numCorrect * 100 / questions.length + "%!";
        resultsContainer.style.display = "block";
    }

    showQuestions(questions, quizContainer);

	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultsContainer);
	}
}