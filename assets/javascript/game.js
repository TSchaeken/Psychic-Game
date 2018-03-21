var cmptrG;
var userScore = 0;
var remGuesses = 5;
var compScore = 0;

function assignValues() {
    var min = document.getElementById("minNum").value;
    var max = document.getElementById("maxNum").value;
    document.getElementById("minNumDsp").innerHTML = min;
    document.getElementById("maxNumDsp").innerHTML = max;
    return(min, max);
}

function start() {
    document.getElementById("gameIntro").style.display = "none";
    document.getElementById("gameBody").style.display = "inline";
    console.log(cmptrG);
    console.log(min);
    console.log(max);
}

function updater() {
    document.getElementById("totalWin").innerHTML = "You have: " +userScore+" points";
}

function newNum () {
    assignValues();
    cmptrG = Math.floor(Math.random()*(max-min)+min);
    console.log(cmptrG);
}

function checker() {
    var userGuess = Math.floor(document.getElementById("userGuess").value);


    if (remGuesses > 0) {


        if (userGuess > cmptrG) {
            --remGuesses
            document.getElementById("status").innerHTML = "Too high!"
            console.log("remaining guesses: " + remGuesses);
        }
        else if (userGuess < cmptrG) {
            --remGuesses
            document.getElementById("status").innerHTML = "Too low!"
            console.log("remaining guesses: " + remGuesses);
        }
        else if (userGuess == cmptrG) {
            document.getElementById("status").innerHTML = "You win this round!"
            userScore++
            newNum();
            updater();
            console.log("user score: " + userScore);
        }

    }

    else {
        document.getElementById("status").innerHTML = "You lost this round!"
        compScore++
        console.log("computer score: " + compScore)
    }
}

assignValues();
newNum();
updater();

if (userScore === 3) {
    document.getElementById("status").innerHTML = "You win! Take that glowy brain to Xaviers"
}

else if(compScore === 3){
    document.getElementById("status").innerHTML = "You lost!"
}


