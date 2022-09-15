const {randomWordPicker, splitWord, generateInitialGuess, letterChecker, getUserInput, checkWinCon, gameLoop, playGame} = require('./hangman');

describe("Hangman functionality", () => {
    let testArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]
    
    describe("randomWordPicker Function", () => {
        test("It exists", () => {
            expect(randomWordPicker).toBeDefined();
        });
    
        test("The function returns a word", () => {
            expect(typeof randomWordPicker(testArray)).toEqual('string');
        });
    
        test("The function returns a word that's contained in the array", () => {
            expect(randomWordPicker(testArray)).toMatch(/[a-t]/);
        });
    
        test("Test that the function returns most likely random words", () => {
            const first = randomWordPicker(testArray);
            const second = randomWordPicker(testArray);
            const third = randomWordPicker(testArray);
            const fourth = randomWordPicker(testArray);
            expect(first === second === third === fourth).toEqual(false);
        });
    });

    describe("splitWord function", () => {
        //test there are 6 characters
        test("Test for 6 characters in our splitword array", () => {
            expect(splitWord("apples").length).toBe(6);
        });

        test("Test that the split word has the characters in the same order as the main word", () => {
            expect(splitWord("cat")).toEqual(["c","a","t"]);
        });
    });

    describe("generateInitialGuess function", () => {
        const randomWord = "cat"
        //test that current
        test("Test that initial guess is the same length as the random word", () => {
            expect(generateInitialGuess(randomWord).length).toEqual(randomWord.length);
        });

        test("test that the current guess contains the correct amount of '_'", () => {
            expect(generateInitialGuess(randomWord)).toEqual(["_", "_", "_"]);
        });
    });

    describe("letterchecker", () => {
        test("test that a letter ends up in the correct position if guessed by the user", () => {
            expect(letterChecker(["c", "a", "t"], "a", ["_", "_", "_"])).toEqual(["_", "a", "_"]);
        }) 

        test("test that multiple letters end up in their correct positions if guessed by the user", () => {
            expect(letterChecker(["b", "o", "o"], "o", ["_", "_", "_"])).toEqual(["_", "o", "o"]);
        });

        test("test that if the letter is not present, the current guess remains the same", () => {
            expect(letterChecker(["c", "a", "t"], "f", ["_", "_", "_"])).toEqual(["_", "_", "_"]);
        });
    })

    // describe("getUserInput Function", () => {
    //     test("Input is in the accepted range of a-z", () => {
    //         expect(getUserInput()).toMatch(/[a-z]/);
    //     });
    // })

    describe("checkWinCon function", () => {
        test("check that if the guess = the random word the function returns true", () => {
            expect(checkWinCon(["c","a","t"], "cat")).toEqual(true);
        });

        test("check that if the guess != the random word the function returns false", () => {
            expect(checkWinCon(["d","o","g"], "cat")).toEqual(false);
        });
    });

    describe("gameloop function", () => {
        test("gameloop function ends when the correct word is chosen, and returns win", () => {
            expect(gameLoop(["c","a","t"], "cat", ["c","a","t"])).toEqual("Win");
        });
    })

    describe("playGame function", () => {
        test("play game function returns the random word, guess as a word, and the correct result", () => {
            expect(playGame("cat",["c","a","t"], ["c","a","t"])).toEqual(["cat","cat","Win"]);
        })
    })
});

