# Problem: Find the Smallest Divisor Given a Threshold

# You are given an array of integers nums and you want to choose a positive integer divisor such that the resulting array 
# after dividing all the numbers in the array by the divisor and rounding them up to the nearest integer has a sum <= threshold.

# Find the smallest divisor such that the result mentioned above is achieved.

# Input: nums = [1,2,5,9], threshold = 6
# Output: 5
# Explanation: We can get a sum to 6 (<= threshold) by dividing all the numbers by 5. 
# [1/5 = 0.2 (rounds to 1), 2/5 = 0.4 (rounds to 1), 5/5 = 1, 9/5 = 1.8 (rounds to 2). Sum = 1+1+1+2 = 5 <= threshold. 
#  If we choose a smaller divisor than 5, the sum becomes greater than 6.


# Input: nums = [2,3,5,7,11], threshold = 11
# Output: 3

# Input: nums = [19], threshold = 5
# Output: 4

import math
def smalldivisor(nums:list[int], threshold:int)->int:
    left, right = 1, max(nums)
    while left <= right:
        mid = (left+right)//2
        sumdivide = sum(math.ceil(n/mid) for n in nums)

        if sumdivide > threshold:
            left = mid+1
        else:
            right = mid-1
    return left

print(smalldivisor( [19], 5))