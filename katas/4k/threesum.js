// Problem: Given an array of n integers, find if there's a triplet in the array which gives the sum of zero. 
// Find all unique triplets in the array which gives the sum of zero.

// Example:

// Given nums = [-1, 0, 1, 2, -1, -4], a solution set is [[-1, 0, 1], [-1, -1, 2]].

function threeSum(nums) {
    const solution = []
    let left = 0
    let right = nums.length - 1
    nums.sort()

    for (let i = 0; i < nums.length - 1; i++) {
        let fixed = nums[i]
        while (left < right) {
            if (fixed + nums[left] + nums[right] == 0 && i != left && i != right) {
                solution.push([fixed, nums[left], nums[right]].sort())
            }
            while (left < right && nums[left] === nums[left - 1]) left++
            while (left < right && nums[right] === nums[right + 1]) right--
            if (fixed + nums[left] + nums[right] > 0) {
                right--
            } else {
                left++
            }
        }
        left = 0
        right = nums.length - 1
    }
    return Array.from(new Set(solution)) //pretty much right on, but this process in js is jank af to go from array of arrays -> set -> array of arrays
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))