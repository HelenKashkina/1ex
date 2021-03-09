let expect = require("chai").expect;
let countLetterOcurrencesInAString = require("./index").countLetterOcurrencesInAString;
describe("countLetter counts the number ot specific letter in a string", function () {
 it("should return 1 for ['letter', 'r']", function () {
 expect(countLetterOcurrencesInAString(['letter', 'r'])).to.be.equal(1);
 });
});
