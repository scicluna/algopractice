# Problem: Find Peak Element

# A peak element is an element that is strictly greater than its neighbors.

# Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, 
# return the index to any of the peaks.

# You may imagine that nums[-1] is -∞ and nums[n] is -∞.

# You must write an algorithm that runs in O(log n) time.


def binarypeak(nums: list[int])->int:
    left, right = 0, len(nums)-1
    while left <= right:
        mid = (left+right)//2
        if nums[mid] < nums[mid+1]:
            left = mid+1
        else:
            right = mid-1
    return left
        
print(binarypeak([1,2,1,3,5,6,4]))