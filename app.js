var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName);
alert('Greetings, ' + userName + '!!!' + '');

confirm('Are you ready to play?');

var counter = 0;
var correctCounter = 0;

function yesNoGame() {
  var questions = ['Is my favorite color pink?', 'Was I born in Washington?', 'Do I love seafood?', 'Did I live in South Carolina for 6 years?', 'Do I love traveling?'];
  var answers = ['yes', 'yes', 'yes', 'yes', 'yes'];
  var corrResponse = ['Nailed it! My favorite color is pink.', 'Correct! I was born in Washington', 'YES! I love seafood!', 'Good job, ' + userName + ', I lived there for 6 years.', 'Of course! Who doesn\'t love traveling?'];
  var wrongResponse = ['Wrong, my favorite color is pink', 'Incorrect, I was born in Washington', 'Wrong. I love seafood.', 'Incorrect, I did live there for 6 years,' + userName + '!', 'Incorrect, of course I love traveling!'];

  for (i = 0 ; i < questions.length ; i++) {
    var question1 = prompt(questions[i]).toLowerCase();
    counter++;
    console.log('user says ' + question1);
    if(question1 === answers[i] || question1 === answers[i][0]) {
      alert(corrResponse[i]);
      correctCounter++;
    } else {
      alert(wrongResponse[i]);
    }
  }
}

yesNoGame();

function numberGame() {
  var qSixCounter = 1;
  var max = 6;
  var question6;
  var numYears = 2;

  while (qSixCounter <= max) {
    question6 = prompt('How many years did I work at Key Bank?');
    counter++;
    if (isNaN(question6) === false) {
      if (parseInt(question6) === numYears) {
        alert('Good Job! I worked there for 2 years. You got it right on try # ' + qSixCounter + '!' );
        console.log('correct. ' + qSixCounter + ' tries!');
        correctCounter++;
        qSixCounter = max + 1;
      } else {
        if (parseInt(question6) >= numYears){
          alert('Incorrect. That was too high.');
        } else if (parseInt(question6) <= numYears) {
          alert('Incorrect. Too low.');
        }
        console.log('That was attempt # ' + qSixCounter + '. You have ' + (max - qSixCounter) + ' tries left.' );
        if (qSixCounter === max) {
          alert('Incorrect, I worked there for 2 years');
          console.log('incorrect');
        }
        qSixCounter++;
      }
    } else {
      alert('That is not a valid number. Please try again.');
    }
  }
}

numberGame();

function guessingGame() {
  var favorites = ['seafood', 'reading', 'traveling', 'painting', 'kitties'];
  var favoritesCombined = favorites.join(', ');
  var tries = 6;
  var qSevenCounter = 1;
  var isCorrect = false;

  alert('For this last question, please type in a word for your answer.');

  while (qSevenCounter <= tries) {
    var question7 = prompt('Name one of my favorite things.').toLowerCase();
    counter++;
    for (var i = 0; i < favorites.length; i++) {
      if (question7 === favorites[i]) {
        alert('Correct. one of my favorite things is ' + question7 + '. Here are all my favorites: ' + favoritesCombined);
        console.log(favoritesCombined);
        isCorrect = true;
        correctCounter++;
        break;
      }
    }
    if (isCorrect === false) {
      alert('Incorrect. Please try again.');
      console.log('wrong, you have ' + (tries - qSevenCounter) + ' left.');
      qSevenCounter++;
      if (qSevenCounter === (tries + 1)) {
        alert('incorrect. Here is a list of some of my favorite things: ' + favoritesCombined);
        console.log('failsquad');
        break;
      }
    } else {
      break;
    }
  }
}

guessingGame();

alert(userName + ', you got ' + correctCounter + ' out of ' + counter + '.');
alert(userName + ', thank you for playing my game! enjoy my page!');
