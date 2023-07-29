#Given two strings s and t of lengths m and n respectively, return the minimum window 
# substring
#  of s such that every character in t (including duplicates) is included in the window. 
# If there is no such substring, return the empty string "".

# The testcases will be generated such that the answer is unique.

def minWindow(s:str, t:str)-> str:
    results = []
    lw = 0
    
    smalldict = {}
    for c in t:
        smalldict[c] = 1 + smalldict.get(c, 0)

    def areAllValuesZero(dict):
        for d in dict.values():
            if d > 0:
                return False
        return True

    for rw in range(len(s)):
        print(lw)
        #loop through range til we hit a legitimate minimum substring
        #AKA, when all of smallest is in biggest. Then we record that string, and roll up lw to be a legit character 
        #but that deligits the string
        if s[rw] in smalldict:
            smalldict[s[rw]] -= 1
            #if the values = 0...
            if areAllValuesZero(smalldict):
                #record the substring...
                results.append(s[lw:rw+1])
                smalldict[s[lw]] += 1
                lw += 1
                #roll up left to the beginning of then next possible substring
                while lw < len(s)-1 and  s[lw] not in smalldict:
                    lw += 1
                while lw < len(s)-1 and s[lw] in smalldict and smalldict[s[lw]] < 0:
                    smalldict[s[lw]] += 1
                    lw += 1
            while smalldict[s[rw]] < 0:
                smalldict[s[lw]] += 1
                lw += 1
                while lw < len(s)-1 and  s[lw] not in smalldict:
                    lw += 1
                

         #otherwise, update lw to be part of smalldict anyway.
        elif s[lw] not in smalldict:
            while lw < len(s)-1 and  s[lw] not in smalldict:
                lw += 1
            
    #find smallest result string
    minresult = ""
    for result in results:
        if minresult == "":
            minresult = result
        elif len(minresult) > len(result):
            minresult = result
    return minresult

print(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd"))