// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const polybiusSquare = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };

    //if encode is true, we are expecting a string, otherwise it will be numbers
    if (encode) {
      // Encoding
      const lowercaseInput = input.toLowerCase();
      let encodedMessage = "";
      for (let i = 0; i < lowercaseInput.length; i++) {
        const char = lowercaseInput[i];
        if (char === " ") {
          encodedMessage += " ";
          continue; //this skips the code block and goes to the next character in the loop, this will handle spaces
        }
        const code = polybiusSquare[char];
        if (code) {
          encodedMessage += code;
        }
      }
      return encodedMessage;
    } else {
      // Decoding, encode set to false
      const numChars = input.split("").filter((char) => char !== " ").length;
      /*Check if the number of characters excluding spaces is even. the split("") method splits the input string into an array of individual characters. Then, the filter method is used to remove any spaces from the array. Finally, the length property returns the count of characters remaining in the array.*/

      if (numChars % 2 !== 0) {
        return false;
      }

      let decodedMessage = "";
      let i = 0;
      while (i < input.length) {
        if (input[i] === " ") {
          decodedMessage += " ";
          i++;
          continue; //this skips when a space is read and goes to the next character in the loop
        }

        //this block below is responsible for decoding a number pair
        const code = input.slice(i, i + 2); //starts at 0 and grabs the first two numbers, we then add two to continue
        if (code === "42") {
          decodedMessage += "(i/j)";
        } else {
          const letter = Object.keys(polybiusSquare).find(
            //object.keys creates an array of keys which we can iterate over using the find method
            (key) => polybiusSquare[key] === code
          );
          if (letter) {
            decodedMessage += letter;
          }
        }
        i += 2;
      }
      return decodedMessage;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
