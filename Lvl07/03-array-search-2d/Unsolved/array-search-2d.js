// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
    let count = 0
    for (let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            const element = arr[i][j]
            if (element == 'X') count++
        }
    }
    return count
};

var arraySearch2D2 = function(arr){
    const flatArray = arr.flat()
    let count = 0
    flatArray.forEach(ele => {
        if (ele == 'X') count++
    })
    return count
}

console.log(arraySearch2D2([        
["X", "O", "O", "O", "X", "O"],
["O", "X", "O", "O", "O", "O"],
["O", "O", "O", "O", "X", "X"],
["O", "O", "O", "O", "O", "O"]]))