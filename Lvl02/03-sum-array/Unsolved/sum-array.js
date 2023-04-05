// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let total = 0
    for (let i=0; i<arr.length; i++){
        total += arr[i]
    }
    return total
};

console.log(sumArray([1,2,3,4,5]))

var sumArray2 = function(arr) {
    return arr.reduce((a,b) => a+b)
};

console.log(sumArray2([1,2,3,4,5]))
