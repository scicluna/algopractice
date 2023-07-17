// Problem: Remove Element

// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

const nums = [3, 2, 2, 3]
const val = 3
//Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return length = 2, with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length. 
// For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]
const val2 = 2
//Output: 5, nums = [0,1,3,0,4,_,_,_]
// Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
// Note that you are not concerned with the values left beyond the returned length.

function removeElement(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j]
            i++;
        }
    }
    console.log(nums)
    return i
}
console.log(removeElement(nums2, val2))