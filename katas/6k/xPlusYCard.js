// Here is how this problem is adapted for this kata ...

// You will be provided with a string of random length.

// A '1' represents card facing up. '0' represents cards facing down.

// A turn consists of taking two adjacent cards where the left one is face up and the right one can be face up or face down and flipping them both.

// If the only "1" that remains is the rightmost card, then just flip it on the final turn.

// Return the minimal count of turns needed to turn all the cards facing down.

// Only strings containing 1's and 0's are valid.

// An invalid string should return 0 turns.

// Enjoy the film if you can!

//WE DID IT!!!
function xPlusY(s) {
    let count = 0

    if (s === '0') return 0
    if (!s.match(/^(0|1)+/)) return 0 

    const array = s.split('')

    for (let i=0; i<array.length; i++){
        if (array[i] == '1'){
            if (i == array.length-1){
                count++
            } else if (array[i+1] == '0'){
                count++
                array[i+1] = 1
            } else if (array[i+1] == '1'){
                count++
                i++
            }
        }
    }
    return count
}

console.log(xPlusY('10101001111'))
//01101001111
//00001001111
//00000101111
//00000011111
//00000000111
//00000000001
//00000000000



//string example:
// '1111111111' -> 5
