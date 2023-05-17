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

// FAIL
function countSubsequences(needle, haystack) {
    const hayArray = haystack.split('')

    let j = 0
    while (true) {
        if (hayArray[j] == needle[0]) {
            hayArray.splice(0, j)
            break;
        }
        j++
    }

    while (true) {
        for (let i = 0; i < needle.length; i++) {
            for (let j = 0; j < hayArray.length; j++) {
                let currentMatcher = needle[i]
                if (currentMatcher == hayArray[j]) {
                    score[currentMatcher] ? score[currentMatcher]++ : score[currentMatcher] = 1
                }
            }
        }

    }

    console.log(hayArray)



    //total = legit.reduce((a, b) => a * b)
    return Number(total.toString().slice(-8))
}

console.log(countSubsequences("happy birthday", "appyh appy birth day")) //2048
                                                    //happy birthday // h appy birth day