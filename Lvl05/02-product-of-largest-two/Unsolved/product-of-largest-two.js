// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function(arr) {
    let largest; //  
    let secondlargest;// 
    for (let i=0; i<arr.length; i++){
        const current = arr[i]
        if (current > largest || !largest){
            secondlargest = largest
            largest = current
            
        }
        if ((current < largest && current > secondlargest) || !secondlargest){
            secondlargest = current
        }
    }
    return (largest * secondlargest)
};

console.log(productOfLargestTwo([1,2,3,4,5,6]))