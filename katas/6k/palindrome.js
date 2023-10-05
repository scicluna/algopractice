/*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome
*/

function isPalindrome(string) {
    const stringTest = string.replace(/(\W|_)/g, "").toLowerCase();
    return stringTest.split("").reverse().join("") === stringTest
}

console.log(pointerIsPalindrome("A man, a plan, a canal: Panama"))

function pointerIsPalindrome(string) {
    if (string.length == 0) return true
    const stringTest = string.toLowerCase().replace(/(\W|_)/g, "")

    let left = 0
    let right = stringTest.length - 1

    while (left < right) {
        if (stringTest[left] != stringTest[right]) {
            return false
        }
        left++
        right--
    }
    return true
}