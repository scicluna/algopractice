// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
// []                               -->  0

const sumevennumbers = (arrayOfNumbers) => {
    let total = 0;
    arrayOfNumbers.forEach(number=>{
        if (number % 2 == 0) total += number;
    })
    return total
}

//Another solution
const sumevennumbers2 = (arrayOfNumbers) => {
    return arrayOfNumbers.filter(number => number % 2 == 0).reduce((a,b) => a+b)
}

console.log(sumevennumbers2([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]))
