gameOn = true;
while (gameOn = true) {
    var max;
    var min;
    
    function setValues() {
        var min = document.getElementById("minNum").nodeValue;
        var max = document.getElementById("maxNum").nodeValue;
        setGuess();
    }

    function setGuess() {
        guessNum = Math.floor(Math.random()*max+min);
    }

    setValues();

    console.log(guessNum);
    break
}