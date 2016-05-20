var power = require('../js/js21.js');


describe("testing hw_21", function () {
    it("base = 0", function () {
        // prepare
        var res;
        // act
        res = power(0, 1);
        // assert
        expect(res).toEqual(0);
    });
  	it("exp = 0", function () {
        // prepare
        var res;
        // act
        res = power(10, 0);
        // assert
        expect(res).toEqual(1);
    });
    it("base = 2, exp = 8", function () {
        // prepare
        var res;
        // act
        res = power(2, 8);
        // assert
        expect(res).toBe(Math.pow(2, 8));
    });
});