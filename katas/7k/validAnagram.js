/*
Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false
    }
    const charMap = {}
    for (let i = 0; i < s.length; i++) {
        if (charMap[s[i]]) {
            charMap[s[i]]++
        } else {
            charMap[s[i]] = 1
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (charMap[t[j]] >= 1) {
            charMap[t[j]]--
        } else {
            return false
        }
    }
    return true
}

console.log(isAnagram("rat", "dsa"))