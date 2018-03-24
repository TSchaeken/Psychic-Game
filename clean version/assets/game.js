var gameData = {
    min: 0,
    max: 0,
    score: 0,
    attempts: 5,
    compGuess: 0,
    scoreUpdate () {
        document.getElementById("current-score").innerHTML = "Your current score is: " + this.score;
        document.getElementById("attempts-remaining").innerHTML = "You have " + this.attempts + " attempts remaining";
    },
    randomize () {
        return Math.floor(Math.random() * (this.max - this.min) + this.min);
    },
    swap(min, max) {
        document.getElementById("placeMin").innerHTML = "Your minimum is: " + min;
        document.getElementById("placeMax").innerHTML = "Your maximum is: " + max;
        document.getElementById("gameBody").style.display = "inline";
        document.getElementById("firstBody").style.display = "none";
    },
    guess() {
        return Number(document.getElementById("guessNum").value);
    }
}

document.getElementById('startButton').onclick = function () {
    let min = Number(document.getElementById("number1").value);
    let max = Number(document.getElementById("number2").value);
    gameData.min = min;
    gameData.max = max;
    gameData.swap(min, max);
    gameData.compGuess = gameData.randomize();
    console.log(gameData.compGuess)
}


document.getElementById('gameButton').onclick = function () {
    if (gameData.guess() == gameData.compGuess) {
        gameData.score++;
        gameData.attempts = 8;
        gameData.scoreUpdate();
        gameData.compGuess = gameData.randomize();
        console.log(gameData.compGuess)
        document.getElementById("status").innerHTML = "Good work! You must be psychic! The game has chosen a new number, keep playing!"
    }
    else if (gameData.guess() > gameData.compGuess){
        gameData.attempts--;
        gameData.scoreUpdate();
        document.getElementById("status").innerHTML="Your guess was too high!";
    }
    else if (gameData.guess() < gameData.compGuess){
        gameData.attempts--;
        gameData.scoreUpdate();
        document.getElementById("status").innerHTML="Your guess was too low!";
    }
    };



