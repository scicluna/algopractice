# Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
# You must write an algorithm that runs in O(n) time.


def longestConsecutive(nums):
    if nums == []:
        return 0

    sorted_keys = sorted(nums)
    max_range = 0
    curr_range = 1
    last_num = sorted_keys[0] 
    for i in range(1, len(sorted_keys)):
        if last_num+1 == sorted_keys[i]:
            curr_range += 1
            last_num = sorted_keys[i]
        else:
            if last_num != sorted_keys[i]:
                last_num = sorted_keys[i]
                max_range = max(max_range, curr_range)
                curr_range = 1
            
 
    max_range = max(max_range, curr_range)
    return max_range
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
#-1,-1,0,1 -- 3,4,5,6,7,8,9
#0,1,1,2