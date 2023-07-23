# You are given a string s and an integer k. You can choose any character of the 
# string and change it to any other uppercase English character. You can perform 
# this operation at most k times.

# Return the length of the longest substring containing the same letter you can get 
# after performing the above operations.

# Input: s = "ABAB", k = 2
# Output: 4
# Explanation: Replace the two 'A's with two 'B's or vice versa.

# Input: s = "AABABBA", k = 1
# Output: 4
# Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
# The substring "BBBB" has the longest repeating letters, which is 4.

def characterReplacement(s: str, k: int) -> int:
    map = {}
    lw = 0
    rw = 0
    res = 0
    maxf = 0
    while rw < len(s):
        map[s[rw]] = 1 + map.get(s[rw], 0)
        maxf = max(maxf, map[s[rw]])
        
        while(rw-lw+1) - maxf > k:
            map[s[lw]] -= 1
            l+=1
        res = max(res, rw-lw + 1)
        rw+=1
    return res

        
        