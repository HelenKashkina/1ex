let expect = require("chai").expect;
let figureArea = require("./index").figureArea;
describe("figureArea counts area of the  figure", function () {
 it("should return 17 for ['2','4','5','3']", function () {
 expect(figureArea(['2','4','5','3'])).to.be.equal(17);
 });
});
