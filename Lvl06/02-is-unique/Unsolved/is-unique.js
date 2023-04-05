// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    const map = {}
    let duplicate;
    arr.forEach(el => {
        if (map[el]) duplicate = true
        if (!map[el]) map[el] = true
    })
    if (duplicate) return false
    return true
};

console.log(isUnique([1,2,3,5,5]))