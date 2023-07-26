# Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
# Input: arr = [2, 1, 5, 1, 3, 2], k = 3
# Output: 9

# Explanation: Subarray with maximum sum is [5, 1, 3].

def max_sub_array(size: int, arr: list[int])->int:
    maximum = 0
    current = 0
    count = 0
    lw = 0
    for rw in range(len(arr)):
        current += arr[rw]
        count += 1
        if count == size:
            maximum = max(maximum, current)
            current -= arr[lw]
            lw += 1
            count -= 1
    return maximum
print(max_sub_array(3, [2,1,5,1,3,2]))