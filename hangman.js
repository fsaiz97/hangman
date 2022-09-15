const figlet = require('figlet');
const prompt = require('prompt-sync')();

function randomWord(wordArr) {
    return wordArr[Math.floor(Math.random()*wordArr.length)];
}

function hangmanWelcome() {
    console.log(figlet.textSync("HANGMAN", { font: "Digital"}));
}

const checkInput = (input) => {
    if(input == null || input == undefined) {
        throw new Error("Please enter a valid letter");
    }else if(input.length != 1) {
        throw new Error("Please enter a single letter");
    } else if(input.toLowerCase() === input.toUpperCase()) {
        throw new Error("Please enter a valid letter");
    } else {
        return true;
    }
}

const checkLetter = (letter, arr) => {
    if(arr.includes(letter)) {
        return true;
    } else {
        return false;
    }
}

const updateGuess = (letter, wordArr, guessArr) => {
    for (let word of wordArr)
    wordArr.forEach()
}

function hangmanGame(wordList) {
    let wordArr = randomWord(wordList).split('');
    let guessArr = ['_', '_', '_', '_', '_', '_'];

    hangmanWelcome();

    while (true) {
        while(true) {

            let input = prompt("Enter a letter: ");
            try {
                if (checkInput(input)) {
                    break;
                }
            }
            catch(err) {
                console.error(err.message)
            }
            
            
        }
       console.log("done")
       break;
    }
}

// hangmanGame(words)

module.exports = { randomWord, hangmanGame, checkInput, updateGuess };

// module.exports.gameFunction = hangmanGame;
