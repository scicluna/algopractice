// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    const map = {}
    str.split('').forEach(char=>{
        if (map[char]) map[char]++
        else map[char] = 1
    })
    return map
};

console.log(characterCount('hello world'))