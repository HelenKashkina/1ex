let expect = require("chai").expect;
let leapYear = require("./index").leapYear;

describe("leapYear tests year", function () {
 it("should return yes for 2020", function () {
 expect(leapYear(2020)).to.be.equal("yes");
 });
});
