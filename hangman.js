const prompt = require('prompt-sync')();

const wordsArray = ["mitigate", "incognito", "dragon", "bizarre", "crestfallen", "system", "stoicism", "villainous", "tennis",
"empire", "energy", "phosphorous", "office", "nature", "insidious", "prison", "totalitarian", "stable", "bike", "cats"]

function randomWordPicker(wordsArray) {
    let randomInt = Math.floor(Math.random() * 20);
    return wordsArray[randomInt];
}

function splitWord(word) {
    return word.split('');
}

function generateInitialGuess(randomWord) {
    return Array(randomWord.length).fill('_');
}

function letterChecker(splitWordArray, userGuessedLetter, currentGuess) {
    // repeat for as many letters there are within the word
    while(splitWordArray.includes(userGuessedLetter)) {
        let i = splitWordArray.indexOf(userGuessedLetter);
        currentGuess[i] = userGuessedLetter;
        splitWordArray[i] = '0';
    }
    return currentGuess;
}

function getUserInput() {
    // prompt a user for their guess
    let userGuessedLetter = prompt("Please enter a letter!: ");

    // make sure the user inputs only a single letter, from a-z
    while (userGuessedLetter.length > 1 || !userGuessedLetter.match(/^[a-zA-Z\s]+$/)) {
        userGuessedLetter = prompt("Please enter a single letter, from a-z: ");
    }
    return userGuessedLetter.toLowerCase();
}

function checkWinCon(currentGuess, randomWord) {
    // If the user has guessed the word in less than 6 guesses, escape the loop
    if(randomWord == currentGuess.join("")) {
        return true;
    } else return false;
}

function gameLoop(currentGuess, randomWord, splitWordArray){
    let guessCount = 0;
    while (guessCount < 6) {
        // check for win condition
        if(checkWinCon(currentGuess, randomWord) === true) {
            return "Win";
        }
        //Show user their current guess (and current word for testing purposes)
        console.log(`${"-".repeat(70)}`);
        console.log(`The current guess: ${currentGuess}`);
        console.log(`Actual word (FOR TESTING PURPOSES): ${randomWord}`);

        //Get the user input
        let userGuessedLetter = getUserInput();

        //Check if the letter is inside the word
        if(splitWordArray.includes(userGuessedLetter) === true) {
            console.log(`You're right! letter: ${userGuessedLetter}`);
            currentGuess = letterChecker(splitWordArray, userGuessedLetter, currentGuess);
        } else {
            console.log(`You're wrong! letter: ${userGuessedLetter} is not in the word!\n`);
            console.log(`You have ${6 - guessCount} guesses remaining!`)
            guessCount++;
        }
        console.log(`${"-".repeat(70)}`);
    }
    return "Lose";
}

// Game function, the function returns the starting word, the final guess, and the result of the game
function playGame(randomWord, splitWordArray, currentGuess) {
    result = gameLoop(currentGuess, randomWord, splitWordArray);
    console.log(`The game is over, the word was: ${randomWord}`);
    console.log(`Your final guess was: ${currentGuess.join("")}`);
    console.log(`The result of your game was: ${result}`);
    return [randomWord, currentGuess.join(""), result];
}

module.exports = {
    randomWordPicker,
    splitWord,
    generateInitialGuess,
    letterChecker,
    getUserInput,
    checkWinCon,
    gameLoop,
    playGame
}
