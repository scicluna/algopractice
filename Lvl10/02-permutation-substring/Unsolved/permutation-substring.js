// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function(str, sub) {
    const map = {}

    for (let i=0; i<str.length; i++){
        const letter = str[i]
        if (!map[letter]) map[letter] = 1
        else if (map[letter]) map[letter] ++ 
    }

    for (let i=0; i<sub.length; i++){
        const letter = sub[i]
        if (!map[letter] || map[letter] == 0) return false
        if (map[letter]) map[letter]--
    }

    return true
};

console.log(permutationSubstring('hello','fllo'))

//'hello', 'llo' => true