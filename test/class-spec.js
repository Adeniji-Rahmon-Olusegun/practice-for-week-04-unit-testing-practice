const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {

  
  describe("Word constructor function", function () {
    it ('should create class instance', function () {
      let word = new Word("Happy day");

      expect(word).to.exist;
    });

    it('should throw an error if input is not a string', function () {

      expect(() => new Word(["Alex"])).to.throw(TypeError, 'Word expects string property');
      expect(() => new Word(2)).to.throw(TypeError, 'Word expects string property');
      expect(() => new Word({a: 1, b: "Tayo"})).to.throw(TypeError, 'Word expects string property');
    });

    it('should have a "word" property', function () {
      let word = new Word("Happy");
      expect(word).to.have.all.keys('word')
    });
  
    it('should set the "word" property when a new word is created', function () {
      let word = new Word("Happy");
      expect(word.word).to.equal("Happy")
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      
      let word1 = new Word("Trybe"); 
      let actualWord1 = word1.removeVowels(); //Tryb

      let word2 = new Word("example");
      let actualWord2 = word2.removeVowels(); //xmpl

      let word3 = new Word("tABlE");
      let actualWord3 = word3.removeVowels(); //tBl

      let word4 = new Word("");
      let actualWord4 = word4.removeVowels(); //""

      expect(actualWord1).to.equal("Tryb");
      expect(actualWord2).to.equal("xmpl");
      expect(actualWord3).to.equal("tBl");
      expect(actualWord4).to.equal("");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      let word1 = new Word("Trybe"); 
      let actualWord1 = word1.removeConsonants(); //e

      let word2 = new Word("example");
      let actualWord2 = word2.removeConsonants(); //eae

      let word3 = new Word("tABlE");
      let actualWord3 = word3.removeConsonants(); //AE

      let word4 = new Word("");
      let actualWord4 = word4.removeConsonants(); //""

      expect(actualWord1).to.equal("e");
      expect(actualWord2).to.equal("eae");
      expect(actualWord3).to.equal("AE");
      expect(actualWord4).to.equal("");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      let word1 = new Word("Trybe"); 
      let actualWord1 = word1.pigLatin(); //Trybe

      let word2 = new Word("example");
      let actualWord2 = word2.pigLatin(); //xmpl

      let word3 = new Word("tABlE");
      let actualWord3 = word3.pigLatin(); //tBl

      let word4 = new Word("");
      let actualWord4 = word4.pigLatin(); //""

      expect(actualWord1).to.equal("eTrybay");
      expect(actualWord2).to.equal("exampleyay");
      expect(actualWord3).to.equal("ABlEtay");
      expect(actualWord4).to.equal(undefined);
    });
  });
});