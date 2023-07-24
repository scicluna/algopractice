# Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

# In other words, return true if one of s1's permutations is the substring of s2.

# Input: s1 = "ab", s2 = "eidbaooo"
# Output: true
# Explanation: s2 contains one permutation of s1 ("ba").

# Input: s1 = "ab", s2 = "eidboaoo"
# Output: false

#plan -> make a dict -> populate with s1's characters -> we loop through s2(right pointer) until we hit one of the s1 characters
#-> then we move leftwindow there and subtract the s1 char from the dict. -> then check next char for if its in the dict. if so repeat ->
#if we hit a char thats not in the dict, our window failed and we repeat the process without returning true and reset the dict.


def checkInclusion(s1:str, s2:str)->bool:
    dict = {}
    for c in s1:
        dict[c] = 1 + dict.get(c, 0)

    lw = 0
    for rw in range(len(s2)):
        #mark down current rw to keep track
        #when we find a dict entry, update left to be the first digit of that entry
        if s2[rw] in dict:
            dict[s2[rw]] -= 1
            while s2[lw] not in dict:
                lw+=1
        else:
            while s2[lw] in dict:
                dict[s2[lw]]+=1
                lw+=1
        #window goes right til illigitimate substring
        #then, we shift the lw til its legitimate again
        if s2[rw] in dict and dict[s2[rw]] < 0:
            while dict[s2[rw]] < 0:
                dict[s2[lw]]+=1
                lw+=1
        elif s2[rw] in dict:
            #check for victory
            if rw-lw+1 == len(s1):
                return True

    #we lost
    return False
            
print(checkInclusion("ab", "eidboaoo"))
