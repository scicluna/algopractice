// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

var commonElement = function(arrA, arrB) {
    const map = {}
    let answer;

    arrA.forEach(element => {
        if (!map[element]) map[element] = 1;
        else map[element]++
    })

    arrB.forEach(element => {
        if (map[element]) answer = element
    })

    return answer
};

console.log(commonElement([5, 3, 4, 10], [0, 4, 9, 99]))
