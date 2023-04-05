// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
    if (strA.length != strB.length) return false

    const map = {}
    for (let i=0; i<strA.length; i++){
        if(map[strA[i]]) map[strA[i]]++
        else map[strA[i]] = 1
    }

    for (let i=0; i<strB.length; i++){
        if (map[strB[i]] && map[strB[i]] != 0) {
            map[strB[i]]--
        } else return false
    }
    return true
};

console.log(isAnagram('heflo', 'lloeh'))
