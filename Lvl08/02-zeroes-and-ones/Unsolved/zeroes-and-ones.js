// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function(str) {
    const map = {}
    for (let i=0; i<str.length; i++){
        const curr = str[i]
        if (!map[curr]) map[curr] = 1
        else if (map[curr] == 1) map[curr]--
        else if (map[curr] == 0) map[curr]++
    }
    console.log(map[0], map[1])
    if (map[0] !== map[1]) return false
    return true
};

console.log(zeroesAndOnes('001101'))