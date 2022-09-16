const { randomWord, hangmanGame, checkInput, updateGuess } = require("./hangman.js");
const each = require("jest-each").default;

describe("hangman game", () => {
    
    describe("hangmanGame()", () => {
        it("Exists", () => {
            expect(hangmanGame).toBeDefined()
        })
    })

    describe("randomWord()", () => {
        it("Exists", () => {
            expect(randomWord).toBeDefined();
        })

        it("Returns a string from word array", () => {
            let wordArr = ["object",
            "flight",
            "accent",
            "expand",
            "tender",
            "makeup",
            "hammer",
            "vision",
            "burial"]
            expect(wordArr.includes(randomWord(wordArr))).toBe(true)
        })
    })

    describe("checkInput()", () => {
        it("Exists", () => {
            expect(checkInput).toBeDefined();
        })

        it("Throws error given empty input", () => {
            expect(() => {
                checkInput("")
            }).toThrow(new Error("Please enter a single letter"))
        })

        it("Throws error given null input", () => {
            expect(() => {
                checkInput(null)
            }).toThrow(new Error("Please enter a valid letter"))
        })

        it("Throws error if input is not a character", () => {
            expect(() => {
                checkInput("1")
            }).toThrow(new Error("Please enter a valid letter"))
        })

        // each([[], []]).test("Something", (expected, input) => {
        //     expect(checkInput(input))
        // })
    })

    describe("updateGuess()", () => {
        it("Exists", () => {
            expect(updateGuess).toBeDefined();
        })

        // each([

        // ].test("Should return %s given %s"), (expec))
    })
})
