const missingLetters = (str) => {
  if (!str || typeof str !== "string") {
    throw new Error("Please provide a valid string");
  }
  let missingLetter;

  let charCode = str.charCodeAt(0);

  for (let i = 1; i < str.length; i++) {
    if (str.charCodeAt([i]) === charCode + 1) {
      charCode++;
    } else {
      missingLetter = String.fromCharCode(charCode + 1);
    }
  }

  return missingLetter;
};

module.exports = { missingLetters };
