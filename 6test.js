let expect = require("chai").expect;
let stringOfNumbers1ToN = require("./index").stringOfNumbers1ToN;

describe("stringOfNumbers write numbers", function () {
 it("should return 12345678910 for 10", function () {
 expect(stringOfNumbers1ToN(10)).to.be.equal(12345678910);
 });
});
