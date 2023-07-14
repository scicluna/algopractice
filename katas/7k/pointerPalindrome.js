// // A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
// and removing all non-alphanumeric characters, it reads the same forward and backward. 
// Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


var isPalindrome = function (s) {
    const string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    if (string.length === 0) {
        return true
    }

    let left = 0
    let right = string.length - 1

    while (left < right) {
        if (string[left] != string[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindrome(" "))