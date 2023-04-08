// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require isn't allowed as well.

//My attempt, didnt clear the 30 byte threshold, but works. MERCY CANT SOLVE
const reverse2 = (a) => {
    let i = 0
    let j = a.length-1
    while(i<j){
        let tmp = a[i]
        a[i] = a[j]
        a[j] = tmp
        i++
        j--
    }
    return a
}

//Chat GPT idea. still too long.
const reverse=a=>a.map(a.pop,[...a])

console.log(reverse([1,2,3,4 ]))