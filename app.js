/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which is not one of the 4 basic waveforms found in all types of audio synthesis?',
      answers: [
        'Square',
        'Sine',
        'Bass',
        'Sawtooth'
      ],
      correctAnswer: 'Bass'
    },
    {
      question: 'What does CV stand for?',
      answers: [
        'Code Verification',
        'Clear Violation',
        'Constant Variable',
        'Control Voltage'
      ],
      correctAnswer: 'Control Voltage'
    },
    {
      question: 'Which does not belong in a subtractive signal path?',
      answers: [
        'Filter',
        'Clock Generator',
        'Oscillator',
        'Amplifier'
      ],
      correctAnswer: 'Clock Generator'
    },
    {
      question: 'Which is not a form of audio synthesis?',
      answers: [
        'Physical Modeling',
        'Granular',
        'Frequency Modulation',
        'Sample and Hold'
      ],
      correctAnswer: 'Sample and Hold'
    },
    {
      question: 'What function does an oscillator perform?',
      answers: [
        'Generates sound',
        'Generates a clock signal',
        'Passes all frequencies below a specified cutoff',
        'Defines how a given sound will change over time'
      ],
      correctAnswer: 'Generates sound'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**Template Function - creates the opening page of the quiz
 * displays the title
 * provides a start butoon which the user can press to begin the quiz*/
function startTemplate() {
  return `<div>
  <h2>Please press "Play" to begin the sequence</h2>
  <form id="begin" class="start-form">
  <input type="submit" value="Play" class="play-btn"></input>
  </div>`;
}

/**Template Function - creates the question and answer pages*/
function questionTemplate() {
  return ` <form id="qstn" class="qstn-form"><p class="question"><span class="num">Question ${store.questionNumber + 1} of ${store.questions.length}</span> ${store.questions[store.questionNumber].question}</p><div class="inp">
  <input type="radio" id="answer1" name="answer" value="${store.questions[store.questionNumber].answers[0]}" class="answer1" required>
  <label class="answr-btn" for="answer1">${store.questions[store.questionNumber].answers[0]}</label>


<br>
<input type="radio" id="answer2" name="answer" value="${store.questions[store.questionNumber].answers[1]}" class="answer2" required>
<label class="answr-btn" for="answer2">${store.questions[store.questionNumber].answers[1]}</label>


<br>
<input type="radio" id="answer3" name="answer" value="${store.questions[store.questionNumber].answers[2]}" class="answer3" required>
<label class="answr-btn" for="answer3">${store.questions[store.questionNumber].answers[2]}</label>


<br>
<input type="radio" id="answer4" name="answer" value="${store.questions[store.questionNumber].answers[3]}" class="answer4"  required>
<label class="answr-btn" for="answer4">${store.questions[store.questionNumber].answers[3]}</label>
<br></div>
<button class='advnc-btn' type='submit'>Advance</button>

<br>

<p><span class="correct">Correct Answers: ${store.score} </span><br><span class="incorrect">Incorrect Answers: ${store.incorrect}</span></p></form>`;
}

/**Template function - creates the response message page */
function responseTemplate() {
  return `<form id="next" class="flex-column flex-center"><input class="advnc-btn" type='submit' value="Advance"></button><p>${store.response}</p><p><span class="correct">Correct answers: ${store.score} </span><br><span class="incorrect">Incorrect answers: ${store.incorrect}</span></p></form>`;
}

/**Template function - arranges the final page */
function finalTemplate() {
  return `<form class="flex-column flex-center"><p>${store.response}</p><p><span class="correct">Correct answer: ${store.score} </span><br><span class="incorrect">Incorrect answers: ${store.incorrect}</span></p><p>That concludes the sequence. Your score is ${store.score} correct and ${store.incorrect} incorrect. </p><button type="submit" class="rstrt-btn" value="Restart"></button></form>`;
}

/**Event Handler - this function loads in the first question after the start button has been pressed */ 

function onlyStartIf() {
  if (!store.quizStarted) {
    renderStart();
  }
}

function handleStart() {
  $('main').on('click', "#begin", function (evt) {
    evt.preventDefault();
    store.quizStarted = true;
    renderQuestion();
 });
}

/**Event Handler - each time a question is answered this function will alert the user with
 * one of two messages depending on whether the correct answer was chosen or not
 * and present them with an input that will take them either to the next question or
 * the end page
 */
function handleAnswer() {
  $("main").on("submit", "#qstn", function(evt) {
    evt.preventDefault();
    let currentQuestion = store.questions[store.questionNumber];
    let answer = $('input[name=answer]:checked').val();
    console.log(answer,currentQuestion.correctAnswer);
    store.questionNumber += 1;
    if (answer === currentQuestion.correctAnswer) {
      store.score += 1;
      store.response = "That is Correct!";
      renderResponse();
    } 
    else {
      store.incorrect += 1;
      store.response = `Sorry, the answer is ${currentQuestion.correctAnswer}`;
      renderResponse();
    }
}); 
}

/**Event Handler -  */
function handleError() {
  $('main').on('click', 'button', function(e) {
    if ($(e.currentTarget).text() === '') {
      if (!$('input[name="answer"]:checked').val()) {
        $('.answr-btn').addClass('error-alert');
      }
    }
  })
}

function handleResponse() {
  $('main').on("submit", "#next", function(nxt) {
    nxt.preventDefault;
    store.quizStarted = true;
    if (store.questionNumber === store.questions.length) {
      renderFinal;
    }
    else {
      renderQuestion(); 
    } 
  })
}

function handleRestart() {

}

/**Render Function - renders the start page*/
function renderStart() {
  template = startTemplate();
  $('main').html(template);
}

function renderQuestion() {
  template = questionTemplate();
  return $('main').html(template);
}

function renderResponse() {
  template = responseTemplate();
  return $('main').html(template);
}

function renderFinal() {
  template = finalTemplate();
  return $('main').html(template);
}

/**gestalt function which activates the event handlers 
 * and then renders the startpage (where everything comes together)*/
function main() {
  onlyStartIf();
  handleStart();
  handleAnswer();
  handleResponse();
  handleRetake();
}
/**executes main function */
$(main);

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)