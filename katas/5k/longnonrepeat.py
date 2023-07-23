# Given a string s, find the length of the longest 
# substring without repeating characters.

# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.

# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.

# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

# def lengthOfLongestSubstring(s: str) -> int:
#     if len(s) == 1:
#         return 1
    
#     solutions = []
#     map = {}
#     count = 0
#     pointer = 0
#     while pointer < len(s):
#         for i in range(pointer, len(s)):
#             if s[i] not in map:
#                 map[s[i]] = 1
#                 count += 1
#                 print(map)
#             else:
#                 solutions.append(count)
#                 map = {}
#                 count = 0
#                 break
#         solutions.append(count)
#         pointer += 1
#     return max(solutions)

def lengthOfLongestSubstring(s:str)->int:
    map = {}
    i = 0
    longest = 0
    for j in range(len(s)):
        if s[j] in map:
            i = max(map[s[j]]+1,i)
        map[s[j]] = j
        longest = max(longest, j-i+1)
    return longest

print(lengthOfLongestSubstring("aab"))
