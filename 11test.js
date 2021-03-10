let expect = require("chai").expect;
let prime = require("./index").prime;


describe("prime shows if a number is prime", function () {
 it("should return prime for 5", function () {
 expect(primeOrNot(5)).to.be.equal('prime');
 });
});
