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
      correctAnswer: 2
    },
    {
      question: 'What does CV stand for?',
      answers: [
        'Code Verification',
        'Clear Violation',
        'Constant Variable',
        'Control Voltage'
      ],
      correctAnswer: 3
    },
    {
      question: 'Which does not belong in a subtractive signal path?',
      answers: [
        'Filter',
        'Clock Generator',
        'Oscillator',
        'Amplifier'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which is not a form of audio synthesis?',
      answers: [
        'Physical Modeling',
        'Granular',
        'Frequency Modulation',
        'Sample and Hold'
      ],
      correctAnswer: 3
    },
    {
      question: 'What function does an oscillator perform?',
      answers: [
        'Generates sound',
        'Generates a clock signal',
        'Pass all frequencies below a specified cutoff',
        'Defines how a given sound will change over time'
      ],
      correctAnswer: 0
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
/**Template Function - creates the opening page of the quiz
 * displays the title
 * provides a start butoon which the user can press to begin the quiz*/
function startQuiz() {
  return `<div class="card">
  <h2>Press Play to Begin the Sequence</h2>
  <form id="begin">
  <input type="submit" value="Play"></input>
  </div>`;
}
/**Template Function - creates the question and answer pages*/
function poseQuestion(item) {
  return `<div class="card">
  <h2>${item.question}</h2>
  <form id="choices">
  <input type="radio" id="${item.answers[0]}" name="answer" value="${item.answers[0]}">
  <label class="answrbtn" for="answer0">${item.answers[0]}</label><br>
  <input type="radio" id="${item.answers[1]}" name="answer" value="${item.answers[1]}">
  <label class="answrbtn" for="answer1">${item.answers[1]}</label><br>
  <input type="radio" id="${item.answers[2]}" name="answer" value="${item.answers[2]}">
  <label class="answrbtn" for="answer2">${item.answers[2]}</label>
  <input type="radio" id="${item.answers[3]}" name="answer" value="${item.answers[3]}">
  <label class="answrbtn" for="answer3">${item.answers[3]}</label>
  <button type="submit">Submit</button>
  </form>
</div>`;
}
/**Template function - creates the response message page */
function displayResponse() {

}

/**Event Handler - each time a question is answered this function will alert the user with
 * one of two messages depending on whether the correct answer was chosen or not
 * and present them with an input that will take them either to the next question or
 * the end page
 */
function handleAnswer() {

}
/**simple Render Function - displays current state of the DOM*/
function render(html) {

}
/**Event Handler - this function loads in the first question after the start button has been pressed */ 
function handleStart() {

}
/**gestalt function which activates the event handlers 
 * and then renders the startpage (where everything comes together)*/
function main() {

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