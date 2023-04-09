// At first it looks like a song, but upon closer investigation, you realize that your friend hid the phrase 
// "happy birthday" thousands of times inside his message. In fact, it contains it more than 2 million times! 
// To thank him, you'd like to reply with exactly how many times it occurs.

// To count all the occurences, the procedure is as follows: look through the paragraph and find a 'h';
//  then find an 'a' later in the paragraph; then find an 'p' after that, and so on. Now count the number 
//  of ways in which you can choose letters in this way to make the full phrase.

// More precisely, given a text string, you are to determine how many times the search string appears as a 
// sub-sequence of that string.

// Write a function called countSubsequences that takes two arguments: needle, the string to be search for 
// and haystack, the string to search in. In our example, "happy birthday" is the needle and the birthday 
// message is the haystack. The function should return the number of times needle occurs as a sub-sequence of haystack. 
// Spaces are also considered part of the needle.

// Since the answers can be very large, return only the last 8 digits of the answer in case it exceeds 8 digits. 
// The answers to the test cases will all be shorter than 8 digits.


function countSubsequences(needle, haystack) {
    let map = {}
    let needlemap = {}
    let legit = []
    let total = 0

    const hayArray = haystack.split('')

    let i = 0
    while (true) {
        if (hayArray[i] == needle[i]) {
            hayArray.splice(0, i)
            break;
        }
        i++
    }

    hayArray.forEach(hay => {
        map[hay] ? map[hay]++ : map[hay] = 1
    })

    needle.split('').forEach(need => {
        needlemap[need] ? needlemap[need]++ : needlemap[need] = 1
    })

    console.log(needlemap)
    console.log(map)


    for (const key in needlemap) {
        if (map[key] == needlemap[key] || map[key] == needlemap[key] + 1) {
            map[key] = 1
            legit.push(map[key])
        } else legit.push(map[key])
    }

    console.log(legit)
    total = legit.reduce((a, b) => a * b)

    return Number(total.toString().slice(-8))
}

console.log(countSubsequences("happy birthday", "appyh appy birth day")) //2048