// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

function searchMatrix(matrix, target) {
    let left = 0
    let right = matrix.length - 1
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)
        if (matrix[mid].includes(target)) {
            return true
        }
        if (matrix[mid][matrix[mid].length - 1] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
}
console.log(searchMatrix([[1], [3]], 3))