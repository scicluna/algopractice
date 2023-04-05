// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    const arrayOfWords = str.split(' ');
    return arrayOfWords.map(word => word[0].toUpperCase().concat(word.split('').splice(1,word.length).join(''))).join(' ')
};

console.log(titleCase('hello there'))

var titleCase2 = function(str) {
    const arrayOfWords = str.split(' ');
    const newArray = []
    for (let i=0; i<arrayOfWords.length; i++){
        let currentWord = arrayOfWords[i].split('')

        currentWord[0] = currentWord[0].toUpperCase()
        newArray.push(currentWord.join(''))        
    }
    return newArray.join(' ')
}

console.log(titleCase2('hello there'))