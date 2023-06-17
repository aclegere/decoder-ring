// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function isUnique(alphabet) {
    //this is a helper function that makes sure the alphabet submitted only contains unique characters

    const charMap = {};

    for (let char of alphabet) {
      if (charMap[char]) {
        return false;
      }
      charMap[char] = true; //adds character as a key in the charMap obj with the value of true
    }

    return true;
    //if loop completes, there are no duplicates and true is returned
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !isUnique(alphabet)) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const userInput = input.toLowerCase();
    let result = "";

    for (let i = 0; i < userInput.length; i++) {
      const char = userInput[i];
      const isUpperCase = input[i] !== char;

      const index = encode
        ? standardAlphabet.indexOf(char)
        : alphabet.indexOf(char);

      if (index === -1) {
        result += char;
      } else {
        let substitutionChar;

        if (encode) {
          substitutionChar = alphabet[index];
        } else {
          substitutionChar = standardAlphabet[index];
        }

        result += isUpperCase
          ? substitutionChar.toUpperCase()
          : substitutionChar;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
