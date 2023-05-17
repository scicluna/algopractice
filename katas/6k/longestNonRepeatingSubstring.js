// 'ABCDDDEFGHI'
// longestNonRepeating('ABCDDDEFGHI') returns DEFGHI

function longestNonRepeating(string) {
    let currentstring = ''
    let maxstring = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[i + 1]) {
            currentstring = currentstring + string[i]
        } else {
            currentstring = currentstring + string[i]
            if (currentstring.length > maxstring.length) {
                maxstring = currentstring
            }
            currentstring = ''
        }
    }
    if (currentstring.length > maxstring.length) return currentstring
    return maxstring
}
console.log(longestNonRepeating('ABCDDDEFGHI'))