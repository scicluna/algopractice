// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

var isPerfectSquare = function(num) {
    let i=0
    while(true){
        if ((i*i) == num) return true      
        if (i>num/2) return false
        i++
    }

};
