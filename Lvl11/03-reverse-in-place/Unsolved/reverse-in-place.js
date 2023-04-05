// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverseInPlace = (arr) => {
    let left = 0
    let right = arr.length-1

    while (left <= right){
       let tmp = arr[left]
       arr[left] = arr[right]
       arr[right] = tmp
       left++
       right--
    }

    return arr
};

console.log(reverseInPlace([1,2,3,4]))