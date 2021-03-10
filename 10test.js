let expect = require("chai").expect;
let oddOrEven = require("./index").oddOrEven;


describe("oddOrEven shows if a number is odd", function () {
 it("should return even for 2", function () {
 expect(oddOrEven(2)).to.be.equal('even');
 });
});
