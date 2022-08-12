// A function called missingLetters is created, accepting one string parameter
// The string comprises of consecutive letters of the alphabet
// When a string of letters is passed to the function, it is checked for the missing letter
// The missing letter is returned || if no missing letter then undefined is returned.
// A better way to handle this would be to return a string "There is no missing letter!"
// However, the challenge specifcally wants an undefined return.

const { missingLetters } = require("./solution");

describe("Missing letters function", () => {
  test("A string is returned", () => {
    // This check needs to pass an parameter with a missing letter otherwise undefined is returned as per acceptence criteria
    const result = missingLetters("abd");
    expect(typeof result === "string").toBe(true);
  });

  test.each([
    ["abce", "d"],
    ["abcdefghjklmno", "i"],
    ["stvwx", "u"],
    ["bcdf", "e"],
    ["abcdefghijklmnopqrstuvwxyz", undefined],
  ])(
    "WHEN %s is passed to missingLetters THEN %s is returned",
    (str, expected) => {
      const result = missingLetters(str);
      expect(result).toBe(expected);
    }
  );
});
