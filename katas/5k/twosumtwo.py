# Problem: Two Sum

# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Input: nums = [2, 7, 11, 15], target = 18
# Output: [1, 2]

def twosum(nums: list[int], target:int)-> list[int]:
    map = {}
    for i in range(len(nums)):
        complement = target - nums[i]
        if complement in map:
            return [map[complement], i]
        map[nums[i]] = i
    return []


print(twosum([3, 2, 4], 6))