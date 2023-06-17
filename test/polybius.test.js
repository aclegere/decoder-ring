const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "itworks";
      const actual = polybius(message);
      const expected = "42442543245234";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "ji";
      const actual = polybius(message);
      const expected = "4242";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "532541424531";
      const actual = polybius(message, false);
      const expected = "pwd(i/j)yc";

      expect(actual).to.equal(expected);
    });
    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4242";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "5325414245311";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
