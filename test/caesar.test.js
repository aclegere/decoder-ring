// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  describe("Encoding a message", () => {
    it("should encode a message by shifting the letters to the right", () => {
      expect(caesar("message", 3)).to.equal("phvvdjh");
    });

    it("should maintain spaces and other symbols as is", () => {
      expect(caesar("a message.", 3)).to.equal("d phvvdjh.");
    });

    it("should ignore capital letters", () => {
      expect(caesar("A MESSAGE", 3)).to.equal("d phvvdjh");
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      expect(caesar("zebra magazine", 3)).to.equal("cheud pdjdclqh");
    });

    it("should allow for a negative shift that shifts to the left", () => {
      expect(caesar("zebra magazine", -3)).to.equal("wbyox jxdxwfkb");
    });
  });

  describe("Decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      expect(caesar("phvvdjh", 3, false)).to.equal("message");
    });

    it("should leave spaces and other symbols as is", () => {
      expect(caesar("d phvvdjh.", 3, false)).to.equal("a message.");
    });

    it("should ignore capital letters", () => {
      expect(caesar("D PHVVDJH", 3, false)).to.equal("a message");
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      expect(caesar("cheud pdjdclqh", 3, false)).to.equal("zebra magazine");
    });

    it("should allow for a negative shift that shifts to the left", () => {
      expect(caesar("wbyox jxdxwfkb", -3, false)).to.equal("zebra magazine");
    });
  });

  describe("Invalid shift value", () => {
    it("should return false for shift value equal to 0", () => {
      expect(caesar("message", 0)).to.equal(false);
    });

    it("should return false for shift value less than -25", () => {
      expect(caesar("message", -30)).to.equal(false);
    });

    it("should return false for shift value greater than 25", () => {
      expect(caesar("message", 30)).to.equal(false);
    });
  });
});
