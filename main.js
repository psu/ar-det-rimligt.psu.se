// http://stackoverflow.com/questions/6390341/how-to-detect-url-change-in-javascript
// http://youmightnotneedjquery.com/

var answer_no        = document.querySelector('#answer-no');
var answer_yes       = document.querySelector('#answer-yes');
var question_button  = document.querySelector('#question-button');
answer_no.style.display = answer_yes.style.display = 'none';
//window.onhashchange = function() { update_answer(); };
window.addEventListener('hashchange', update_answer);
question_button.addEventListener('click', random_answer);

update_answer();

function update_answer() {
  switch ( window.location.hash ) {
    case '#nej':
      answer_yes.style.display  = 'none';
      answer_no.style.display   = '';
      break;
    case '#ja':
      answer_no.style.display   = 'none';
      answer_yes.style.display  = '';
      break;
  }
}

function random_answer() {
  question_button.blur();
  if ( Math.random() > .66666 ) 
    update_hash('#ja');
  else
    update_hash('#nej');
}

function update_hash(hash) {
  window.location = hash;
}