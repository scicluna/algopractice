class Solution(object):
    def twoSum(self, nums, target):
        map = {}
        for i in range(len(nums)):
            compliment = target - nums[i]
            if compliment in map:
                return [map[compliment], i]
            map[nums[i]] = i

#think about it. we just start populating the map with the i of each number.
#then, if we run into the compliment, we know we have the answer.