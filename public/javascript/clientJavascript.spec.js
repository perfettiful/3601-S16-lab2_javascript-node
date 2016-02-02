
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    ////this test should fail.
    it('this test should fail!', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('should return the correct string puppies', function(){
        expect(returnPuppies()).toBe("puppies");
    });
});

describe('testing gpaCalc', function(){
    it('We should get 4.00 for all A', function() {
        expect(gpaCalc(1, 1, 1, 4.0, 4.0, 4.0)).toBe(4.00);
    });

    it('We should get 2.00 for all C', function() {
        expect(gpaCalc(1, 1, 1, 2, 2, 2)).toBe(2.00);
    });

    it('We should get 0.00 for all F', function() {
        expect(gpaCalc(1, 1, 1, 0, 0, 0)).toBe(0.00);
    });

    it('We should get 2.000 for A, C, F with 2 Credits each', function() {
        expect(gpaCalc(2, 2, 2, 4, 2, 0)).toBe(2.00);
    });

});

