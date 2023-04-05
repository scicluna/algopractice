// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function(str) {
    const arrayOfWords = str.split(' ')
    const camelCasedWords = []
    arrayOfWords.forEach((word, i) => {
        let wordLetters = word.split('')

        if(i == 0) wordLetters[0] = wordLetters[0].toLowerCase()
        else wordLetters[0] = wordLetters[0].toUpperCase()
        
        camelCasedWords.push(wordLetters.join(''))
    })
    return camelCasedWords.join('')
};

console.log(camelCase('Hello there dude'))