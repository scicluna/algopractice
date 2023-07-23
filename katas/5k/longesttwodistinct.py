# Given a string s, find the length of the longest substring that 
# contains at most two distinct characters.

# Input: s = "eceba"
# Output: 3
# Explanation: The longest substring with at most 2 distinct characters is "ece".

def longestTwoDistinct(s: str)->int:
    maximum = 0
    map = {}
    lw = 0
    rw = 0
    while rw < len(s):
        map[s[rw]] = 1
        if len(map) > 2:
            maximum = max(maximum, rw-lw)
            map = {s[lw] : 1}
            lw = rw-1
        else:
            rw += 1
    return max(maximum, rw-lw)
print(longestTwoDistinct("eceba"))
    