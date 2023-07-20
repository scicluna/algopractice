# Suppose an array sorted in ascending order is rotated at some pivot unknown to you 
# beforehand (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

# You are given a target value to searchrotate. If found in the array return True, otherwise return False.

# This problem is a follow-up to "Search in Rotated Sorted Array" and is slightly more challenging because nums may 
# contain duplicates.

# Input: nums = [2,5,6,0,0,1,2], target = 0
# Output: True

# Input: nums = [2,5,6,0,0,1,2], target = 3
# Output: False
def searchrotate(nums:list[int], target:int)->bool:
    left, right = 0, len(nums)-1
    while left<=right:
        mid = (left+right)//2
        if nums[mid] == target:
            return True
        elif nums[left] == nums[mid]:
            left += 1
        elif nums[right] == nums[mid]:
            right -=1
        elif nums[mid] < nums[right]:
            if nums[mid] <= target <= nums[right]:
                left = mid+1
            else:
                right = mid-1
        else:
            if nums[left] <= target <= nums[mid]:
                right = mid-1
            else:
                left = mid+1
    return False
print( searchrotate([2,2,2,0,2,2], 0) )
print( searchrotate([1,3,1,1,1], 3) )
print( searchrotate([1,3,5,1], 3) )
print( searchrotate([1,1,3,1], 3) )
print( searchrotate([10,10,10,1,10], 1) )
print( searchrotate([2,2,2,0,1,2], 0) )
print( searchrotate([2,5,6,0,0,1,2], 0) )
print( searchrotate([2,5,6,0,0,1,2], 3) )
print( searchrotate([1,0,1,1,1], 0) )
print( searchrotate([1,1,1,0,1], 0) )
print( searchrotate([1,1,1,1], 1) )
print( searchrotate([1,1,1,1], 2) )