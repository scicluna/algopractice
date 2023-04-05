// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order

var sortedSquares = function(arr) {
    const newArr = arr.map(element => element*element).sort((a,b) => a-b)
    return newArr
};

const sortedSquares2 = function(arr){
    
    const squaredArray = Array(arr.length)
    let i=0
    let j=arr.length-1
    let x=0

    while (x<=j){
        console.log(x)
        if (Math.abs(arr[i]) > Math.abs(arr[j]) && arr[i] < 0){
            squaredArray[j] = arr[i]**2
            j--
        } else {
            squaredArray[x] = arr[i]**2
            x++
        }
        i++
    }
    
    return squaredArray
}

console.log(sortedSquares2([-6,-5,1,2,3,4]))
// [ 1, 2, 3, j, 25, 36]