// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

var rotationPoint = function(words) {
    let count = 0;
    let rotating = true

    if (words.length < 2) return -1

    while (rotating){
        if (words[0] < words[1]){
            words.push(words[0])
            words.shift()
            count++
        } else if (words[0] > words[1]){
            words.push(words[0])
            words.shift()
            rotating = false
            count++
        } else rotating = false
    }

    if (count >= words.length){
        count -= words.length
    }

    if (count == 0) return -1
    return count 
};

console.log(rotationPoint(['any', 'body', 'can', 'dance', 'to', 'violas']))