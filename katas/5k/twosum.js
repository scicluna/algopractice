function twoSum(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        if (nums[left] + nums[right] == target) {
            return true
        }

        if (nums[left] + nums[right] < target) {
            left++
        } else {
            right--
        }
    }
    return false
}

const nums = [1, 2, 3, 4, 6]
target = 6
console.log(twoSum(nums, target))