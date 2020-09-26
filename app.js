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
  score: 0,
  incorrect: 0
};

/**Template Function - creates the opening page of the quiz
 * displays the title
 * provides a start butoon which the user can press to begin the quiz*/
function startTemplate() {
  return `<div class="strt-sqnc">
  <h2 class="pls-prs-ply">Please press "Play" to begin the sequence</h2>
  <br>
  <form id="begin"><input type="submit" value="Play" class="play-btn"></input></form>
  </div>`;
}

/**Template Function - creates the question and answer pages*/
function questionTemplate() {
  return `<form id="qstn"><h2 class="qstn-nmbr">Question ${store.questionNumber + 1} of ${store.questions.length}</h2>
  <br>
  <h2 class="qstn-txt"> ${store.questions[store.questionNumber].question}</h2>
  <div class="choices">
  <input type="radio" id="answer1" name="answer" value="${store.questions[store.questionNumber].answers[0]}" class="answer1" required>
  <label class="answr-btn" for="answer1">${store.questions[store.questionNumber].answers[0]}</label>
  <br>
  <input type="radio" id="answer2" name="answer" value="${store.questions[store.questionNumber].answers[1]}" class="answer2" required>
  <label class="answr-btn" for="answer2">${store.questions[store.questionNumber].answers[1]}</label>
  <br>
  <input type="radio" id="answer3" name="answer" value="${store.questions[store.questionNumber].answers[2]}" class="answer3" required>
  <label class="answr-btn" for="answer3">${store.questions[store.questionNumber].answers[2]}</label>
  <br>
  <input type="radio" id="answer4" name="answer" value="${store.questions[store.questionNumber].answers[3]}" class="answer4" required>
  <label class="answr-btn" for="answer4">${store.questions[store.questionNumber].answers[3]}</label>
  </div>
  <br>
  <div class="answr-cntnr">
  <input class='answr-btn' type='submit' value="Answer"></input>
  </div>
  <br>
  <p class="score">Correct Answers: ${store.score}<br>Incorrect Answers: ${store.incorrect}</p>
  </form>`;
}

/**Template function - creates the response message page */
function responseTemplate() {
  return `<form id="rspns" class="rspns-form">
  <h2 class="rspns">${store.response}</h2>
  <br>
  <div class="advnc-cntnr">
  <input class="advnc-btn" type='submit' value="Advance"></button>
  </div>
  </form>`;
}

/**Template function - arranges the final page */
function finalTemplate() {
  return `<form id ="final" class="fnl-form">
  <h2 class="fnl-scr">That concludes the sequence.<br>Your score is ${store.score} correct and ${store.incorrect} incorrect.</h2>
  <br>
  <div class="rstrt-cntnr">
  <input type="submit" class="rstrt-btn" value="Restart"></button>
  </div>
  </form>`;
}

/**Event Handler - this function loads in the first question after the start button has been pressed */ 

function onlyStartIf() {
  if (!store.quizStarted) {
    renderStart();
  }
}

function handleRestart() {
  $('main').on("submit", "#final", function (ebt) {
    ebt.preventDefault();
    store.questionNumber = 0;
    store.incorrect = 0;
    store.score = 0;
    store.quizStarted = true;
    renderQuestion();
 }); 
}

function handleStart() {
  $('main').on("submit", "#begin", function (evt) {
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
  $('main').on("submit", "#rspns", function(nxt) {
    nxt.preventDefault;
    store.quizStarted = true;
    if (store.questionNumber === store.questions.length) {
      renderFinal();
    }
    else {
      renderQuestion(); 
    } 
  })
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
  handleRestart();
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