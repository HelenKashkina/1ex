let expect = require("chai").expect;
let triangleArea = require("./index").triangleArea;


describe("triangleArea calculates the Area", function () {
 it("should return 6 for ['3','4','5']", function () {
 expect(triangleArea(['3','4','5'])).to.be.equal(6);
 });
});
