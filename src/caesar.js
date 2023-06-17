// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check shift value
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Calc shift based on encode/decode, if encode is false, turn input neg
    const shiftVal = encode ? shift : -shift;

    /* 
    Create the shifted alphabet based on shift value -
    first part of equation takes everything from the shift position forward-
    second part adds back what was previously sliced to the end-
    */
    const shiftedAlphabet =
      alphabet.slice(shiftVal) + alphabet.slice(0, shiftVal);

    // Convert the input to lowercase
    const lowercasedInput = input.toLowerCase();

    // Encode or decode the message based on the encode value
    let result = "";
    for (let i = 0; i < lowercasedInput.length; i++) {
      const char = lowercasedInput[i];

      // non-alpha characters
      if (!alphabet.includes(char)) {
        result += char;
        continue; //this skips the code block and goes to the next character in the loop, this will handle spaces and other punctuation
      }

      // Find the index of the current character in the alphabet
      const index = alphabet.indexOf(char);

      // Apply the shift to the index to get the corresponding shifted character
      const shiftedChar = shiftedAlphabet[index];

      // Add the shifted character to the result
      result += shiftedChar;
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
