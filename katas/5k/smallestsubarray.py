# Problem: Smallest Subarray with a given sum (easy)

# Given an array of positive numbers and a positive number ‘S’, find the length of the smallest 
# contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

# Input: s = 7, arr = [2, 1, 5, 2, 3, 2]
# Output: 2
# Explanation: The smallest subarray with a sum greater than or equal to 7 is [5, 2].

# Input: s = 7, arr = [1, 1, 1, 1, 1, 1, 1, 1]
# Output: 7
# Explanation: The smallest subarray with a sum greater than or equal to 7 is [1, 1, 1, 1, 1, 1, 1].

# Input: s = 8, arr = [3, 4, 1, 1, 6]
# Output: 3
# Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] and [1, 1, 6]. However, the latter is the smallest with length '3'.

# Input: s = 15, arr = [1, 2, 3, 4, 5]
# Output: 5
# Explanation: The smallest subarray with a sum greater than or equal to 15 is [1, 2, 3, 4, 5].
# Example 5:

# Input: s = 15, arr = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]
# Output: 2
# Explanation: The smallest subarray with a sum greater than or equal to 15 is [10, 7].

def smallestsubarray(sum: int, arr: list[int])->int:
    minlen = float('inf')
    currsum = 0
    lw = 0
    for rw in range(len(arr)):
        currsum += arr[rw]
        while currsum >= sum:
            minlen = min(minlen, rw-lw+1)
            currsum -= arr[lw]
            lw += 1
    if minlen > len(arr):
        return 0
    else:
        return minlen
print(smallestsubarray(7, [2, 1, 5, 2, 3, 2]))