function arraysAreTheSame(inArr1, inArr2) {

    // superfiscial compare of 2 arrays, not a deep compare.
    if (!(inArr1 === inArr2)) {
        // array references are different. continue testing

        if (inArr1.length === inArr2.length) {
            // arrays are the same length
            return inArr1.reduce((areSame, arr1Val, arr1Idx) =>
                (((arr1Val === inArr2[arr1Idx]) && areSame) ? true : false),
                true)
        } else {
            return false;
        }

    } else {
        return false;
    }

}


// ES5 Map Callback

function double(arr) {
    return arr.map(function (val) {
        return val * 2;
    });
}



// ES2015 Arrow Functions Shorthand
// Refactor the above code to use two arrow functions. Turn it into a one-liner.
function doubleNew(arr) {
    return arr.map((val) => val * 2);
}

/* Write an ES2015 Version */
// Refactor the following function to use only arrow functions:
function squareAndFindEvens(numbers) {
    var squares = numbers.map(function (num) {
        return num ** 2;
    });
    var evens = squares.filter(function (square) {
        return square % 2 === 0;
    });
    return evens;
}

function squareAndFindEvensNew(numbers) {
    const squares = numbers.map((num) => num ** 2);
    return squares.filter((square) => square % 2 === 0);
}

function squareAndFindEvensNewer(numbers) {

    return numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);

}

function squareAndFindEvensBest(numbers) {

    // operates on the premise that an odd number squared is an odd number!

    return numbers.reduce(function (squaredEvens, inVal) {
        if (inVal % 2 === 0) {
            squaredEvens.push(inVal ** 2);
        }
        return squaredEvens;
    }, []);

}

