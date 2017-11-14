    var wins = 0;
  	var losses = 0;
    var guessesLeft = 9;
    var guesses = "";
  	var computerGuess = makeid() 
    
    function makeid () {
    	var text = "";
    	var possible = "abcdefghijklmnopqrstuvwxyz"
    	text = possible.charAt(Math.floor(Math.random() * possible.length));
    	return text
    }

    function reset () {
    	guessesLeft = 9;
    	computerGuess = makeid();
    	guesses = "";
    }

    function keypressed (e) {
   	var keynum = event.which || event.keycode;
    var keychar = String.fromCharCode(keynum);
    
    guessesLeft--;

    if(guesses.length === 0)
    	guesses += keychar;
     else
     	guesses += "," + keychar;

    if (keychar === computerGuess) {
      reset();
       wins++;
      }
      else if (guessesLeft === 0) {
      	reset();
      	losses++;

      }

       updateView();




   	}

    function updateView ()  {
    	document.getElementById("wins").innerHTML = wins;
    	document.getElementById("losses").innerHTML = losses;
    	document.getElementById("guessesLeft").innerHTML = wins;
    	document.getElementById("guesses").innerHTML = wins;
    	document.getElementById("computerGuess").innerHTML = wins;

 
    }