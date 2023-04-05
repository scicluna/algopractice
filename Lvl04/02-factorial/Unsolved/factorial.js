// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    if (num === 0) return 1;

    let product = 1;
    for (let i=1; i<=num; i++){
        product *= i
    }
    return product
};

console.log(factorial(3))