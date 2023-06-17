// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const input = "message";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const input = "message";
      const alphabet = "notreallyawholealphabet";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "message";
      const alphabet = "dfgddfdfdfdfdfkjkjkjkjkjkabab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "hello";
      const alphabet = "zxcvbnmasdfghjklqwertyuiop";
      const actual = substitution(message, alphabet);
      const expected = "abggk";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "hello";
      const alphabet = "1234567890qwertyuiopasdfg.";
      const actual = substitution(message, alphabet);
      const expected = "85wwt";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "hello there";
      const alphabet = "1234567890qwertyuiopasdfg.";
      const actual = substitution(message, alphabet);
      const expected = "85wwt p85i5";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet, including spaces", () => {
      const message = "85wwt p85i5 .54";
      const alphabet = "1234567890qwertyuiopasdfg.";
      const actual = substitution(message, alphabet, false);
      const expected = "hello there zed";

      expect(actual).to.equal(expected);
    });
  });
});
