// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty

var concertFlyer = function (magazine, flyer) {
    const map = {}

    for (let i=0; i<magazine.length; i++){
        const letter = magazine[i]
        if (!map[letter]) map[letter] = 1
        else map[letter]++
    }

    for (let i=0; i<flyer.length; i++){
        const letter = flyer[i]
        if (!map[letter] || map[letter] == 0) return false
        if (map[letter]) map[letter]--
    }

    return true
};
