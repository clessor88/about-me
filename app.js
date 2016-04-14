var userName = prompt('What is your name?');
console.log('The user\'s name is ' + userName);
alert('Greetings, ' + userName + '!!!' + '');

confirm('Are you ready to play?');
		var question1 = prompt('Is my favorite color pink?').toLowerCase();
		console.log('user says ' + question1);
			if(question1 === 'y' || question1 === 'yes')
			{ alert('Nailed it! My favorite color is pink.');
			}
			else {alert('Wrong, my favorite color is pink');
			}

		var question2 = prompt('Was I born in Washington?').toLowerCase();
		console.log('user says ' + question2);
			if(question2 === 'y' || question2 === 'yes')
			{ alert('Correct! I was born in Washington');
			}
			else {alert('Incorrect, I was born in Washington');
			}

		var question3 = prompt('Do I love seafood?').toLowerCase();
		console.log('user says ' + question3);
			if(question3 === 'y' || question3 === 'yes')
			{ alert('YES! I love seafood!');
			}
			else {alert('Wrong. I love seafood.');
			}

		var question4 = prompt('Did I live in South Carolina for 6 years?').toLowerCase();
		console.log('user says ' + question4);
			if(question4 === 'y' || question4 === 'yes')
			{alert('Good job, ' + userName + ', I lived there for 6 years.');
			}
			else {alert('Incorrect, I did live there for 6 years,' + userName + '!');
			}

		var question5 = prompt('Do I love traveling?').toLowerCase();
		console.log('user says ' + question5);
			if(question5 === 'y' || question5 === 'yes')
			{alert('Of course! Who doesn\'t love traveling?');
			}
			else {alert('Incorrect, of course I love traveling!');
			}

		var qSixCounter = 1;
		var max = 6;
		var question6;
		var numYears = 2;

		while (qSixCounter <= max) {
	  question6 = prompt('How many years did I work at Key Bank?');
	  if (isNaN(question6) === false) {
	    if (parseInt(question6) === numYears) {
	      alert('Good Job! I worked there for 2 years. You got it right on try # ' + qSixCounter + '!' );
	      console.log('correct. ' + qSixCounter + ' tries!');
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
	    	answer6;
	  	}
		}

		var favorites = ['seafood', 'reading', 'traveling', 'painting', 'kitties'];
		var favoritesCombined = favorites.join(', ');
		var tries = 6;
		var qSevenCounter = 1;
		var isCorrect = false;

		alert('For this last question, please type in a word for your answer.');

		while (qSevenCounter <= tries) {
	  var question7 = prompt('Name one of my favorite things.').toLowerCase();
	  for (var i = 0; i < favorites.length; i++) {
	    console.log(favorites[i]);
	    if (question7 === favorites[i]) {
	      alert('Correct. one of my favorite things is ' + question7 + '. here are some more favorites: ' + favoritesCombined);
	      console.log(favoritesCombined);
	      isCorrect = true;
	      break;
	    } else {
	      console.log('current guess is not at ' + i + ' continuing to check');
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
		alert(userName + ', thank you for playing my game! enjoy my page!');
