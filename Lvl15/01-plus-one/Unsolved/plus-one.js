// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place

var plusOne = function(digits) {
    
    digits[digits.length-1]++
    if (digits[digits.length-1] > 9){
        digits[digits.length-1] -= 10
        digits[digits.length-2]++
    }

    if (digits[0] > 9){
        digits[0] -= 10
        digits.unshift(1)
    }

    if (!digits.length){
        digits.unshift(1)
    }

    return digits
};

console.log(plusOne([]))