let userGuess = "";

function NumberButton(number) {
    if (userGuess.length < 2) {
        userGuess += number;
        document.getElementById("userNumber").textContent = userGuess;
    }
}

function submitGuess() {
    const computerNumber = Math.round(Math.random() * 10);
    document.getElementById("computerNumber").textContent = computerNumber;
    
    const userNum = parseInt(userGuess);
    
    if (userNum === computerNumber) {
        alert("you won! You guessed the number!");
    } else {
        alert("you lost! The correct number was " + computerNumber);
    }

    userGuess = "";
    document.getElementById("userNumber").textContent = "0";
}