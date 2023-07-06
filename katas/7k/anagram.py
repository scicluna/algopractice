class Solution(object):
    def isAnagram(self, s, t):
        if len(s) != len(t):
            return False
        map = {}
        for char in s:
            if char in map:
                map[char] += 1
            else:
                map[char] = 1
        for char in t:
            if char in map and map[char] > 0:
                map[char] -= 1
            else:
                return False
        return True
