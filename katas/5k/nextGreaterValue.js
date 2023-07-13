// Problem: Given an array, print the Next Greater Element (NGE) for every element. The Next Greater Element for an 
// element x is the first greater element on the right 
// side of x in the array. Elements for which no greater element exist, consider the Next Greater Element as -1.

// Input: [4, 5, 2, 25]
// Output: 5, 25, 25, -1

// Input: [13, 7, 6, 12]
// Output: -1, 12, 12, -1

function nge(array) {
    const stack = []
    const results = Array(array.length).fill(-1)

    for (let i = 0; i < array.length; i++) {
        while (stack && array[i] > array[stack[stack.length - 1]]) {
            results[stack[stack.length - 1]] = array[i]
            stack.pop()
        }
        stack.push(i)
    }
    return results
}

console.log(nge([4, 5, 2, 25]))
