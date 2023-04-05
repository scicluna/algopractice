// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    return str == str.split('').reverse().join('')
};

console.log(isPalindrome('racecar'))

const isPalindrome2 = function(str) {
    let left=0
    let right=str.length-1
    let stillPalindrome = true

    while(stillPalindrome){
        stillPalindrome = false
        if (str[left] == str[right]){
            stillPalindrome = true
        }
        left++
        right--
        if (left == right){
            return true
        }
    }
    return false
}
console.log(isPalindrome2('racecar'))
