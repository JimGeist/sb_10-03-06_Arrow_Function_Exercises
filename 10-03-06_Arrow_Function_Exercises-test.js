describe("tests of function arraysAreTheSame", function () {
    beforeAll(function () {
        // initialization logic
        myTestArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        //console.dir(myTestArray1);
        //myTestArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    });

    it("returns false when the same array object is passed in for both arguments", function () {
        expect(arraysAreTheSame(myTestArray1, myTestArray1)).toEqual(false);
    });
    it("returns false when the arrays are different lengths", function () {
        expect(arraysAreTheSame([1, 2, 3], [1, 2, 3, 4, 5])).toEqual(false);
    });
    it("returns false when the arrays have different element values", function () {
        expect(arraysAreTheSame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual(false);
    });
    it("returns true when the arrays with different reference objects have the same element values", function () {
        expect(arraysAreTheSame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(true);
    });
});


describe("tests of ES5 double function and refactored ES2015 doubleNew function", function () {

    it("returns true when the results of the ES5 double and ES2015 doubleNew are the same", function () {
        expect(arraysAreTheSame(double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), doubleNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(true);
    });


});

describe("tests of ES5 squareAndFindEvens function and refactored ES2015 squareAndFindEvensNew function", function () {

    it("returns true when the results of the ES5 squareAndFindEvens and ES2015 squareAndFindEvensNew are the same", function () {
        expect(arraysAreTheSame(squareAndFindEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), squareAndFindEvensNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(true);
    });


});

describe("tests of refactored squareAndFindEvensNew and further refactored squareAndFindEvensNewer functions", function () {

    it("returns true when the results of the ES5 squareAndFindEvens and ES2015 squareAndFindEvensNew are the same", function () {
        expect(arraysAreTheSame(squareAndFindEvensNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), squareAndFindEvensNewer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(true);
    });


});

describe("tests of refactored squareAndFindEvensNew and further reworked squareAndFindEvensBest functions", function () {

    it("returns true when the results of the ES5 squareAndFindEvensNew and ES2015 squareAndFindEvensBest are the same", function () {
        expect(arraysAreTheSame(squareAndFindEvensNew([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), squareAndFindEvensBest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))).toEqual(true);
    });


});


