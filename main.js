const prompt = require('prompt-sync')();
const {randomWordPicker, splitWord, generateInitialGuess, letterChecker, getUserInput, checkWinCon, gameLoop, playGame} = require('./hangman.js');

const wordsArray = ["mitigate", "incognito", "dragon", "bizarre", "crestfallen", "system", "stoicism", "villainous", "tennis",
"empire", "energy", "phosphorous", "office", "nature", "insidious", "prison", "totalitarian", "stable", "bike", "cats"]

const randomWord = randomWordPicker(wordsArray);
const splitWordArray = splitWord(randomWord);
let currentGuess = generateInitialGuess(randomWord);

playGame(randomWord, splitWordArray, currentGuess);
