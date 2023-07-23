# Given an array of positive integers nums and a positive integer target, 
# return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] 
# of which the sum is greater than or equal to target. If there is no such subarray, return0 
# instead.

# Input: nums = [2,3,1,2,4,3], target = 7
# Output: 2
# Explanation: The subarray [4,3] has the minimal length under the problem constraint.

def minSubArrayLen(target: int, nums: list[int]) -> int:
    ans = len(nums)
    lw = 0
    rw = 0
    sum = 0
    while rw < len(nums):
        sum += nums[rw]
        while sum >= target:
            ans = min(ans, rw-lw+1)
            sum -= nums[lw]
            lw += 1
        rw += 1
    return ans
print(minSubArrayLen(7, [2,3,1,2,4,3]))
