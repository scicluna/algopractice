# Problem: Rotated Sorted Array Search

# Given a sorted and rotated array (rotated at some unknown point) that contains distinct elements, write a function to 
# find a target element in the array. If the element is present, return the index; if it is not present, return -1. 
# Assume the array is sorted in increasing order.

# Input: arr = [4, 5, 6, 7, 0, 1, 2], target = 0
# Output: 4

def rotatedsearch(arr: list[int], target: int)->int:
    left, right = 0, len(arr)-1
    while left <= right:
        mid = (left+right)//2
        if arr[mid] == target:
            return mid
        elif arr[mid] > arr[left]:
            if arr[left] <= target <= arr[mid]:
                right = mid-1
            else:
                left = mid+1
        else:
            if arr[mid] <= target <= arr[right]:
                left = mid+1
            else:
                right = mid-1
    return -1
print(rotatedsearch([4,5,6,7,0,1,2], 0))