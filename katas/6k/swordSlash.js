// Suppose there are n people standing in a circle and they are numbered 1 through n in order.

// Person 1 starts off with a sword and kills person 2. He then passes the sword to the next person still standing,
// in this case person 3. Person 3 then uses the sword to kill person 4, and passes it to person 5.
// This pattern continues around and around the circle until just one person remains.

// What is the number of this person?

// Example:
// For n = 5, the result should be 3.

//  1 kills 2, passes to 3. 3 kills 4, passes to 5. 5 kills 1, passes to 3. 3 kills 5 and wins.

// Input/Output
// [input] integer n
// The number of people. 1 through n standing in a circle.

// 1 <= n <= 1e9

// [output] an integer
// The index of the last person standing.

// All evens die. 
// const circleSlash = (n) => {
//     const arr = [];
//     for (let i = 0; i <= n; i++) {
//         arr.push(i);
//     }

//     let i = 0
//     while (arr.length > 1) {
//         if (arr[i + 1]) {
//             arr.splice([i + 1], 1)
//             if (i >= arr.length - 1) {
//                 i = 0
//             } else i++
//         } else {
//             arr.splice(0, 1)
//             i = 0
//         }
//     }
//     return arr[0] + 1
// }

const circleSlash = (n) => {
    let i = 1
    while (true) {
        const j = (2 * i)
        if (j <= n) {
            i = j
        } else break
    }
    return 1 + (2 * (n - i))
}

console.log(circleSlash(5)) // 3

// i = 1
// while(i < n):
//     j = 2i + 1
//     if j < n:
//         i = j
// remainder = n - j
// solution = i + (2*remainder)

// console.log(circleSlash(1)) // 1
// console.log(circleSlash(2)) // 3
// console.log(circleSlash(3)) // 1
// console.log(circleSlash(4)) // 3
// console.log(circleSlash(5)) // 5
// console.log(circleSlash(6)) // 7
// console.log(circleSlash(7)) // 1
// console.log(circleSlash(8)) // 3
// console.log(circleSlash(9)) // 5
// console.log(circleSlash(10)) // 7
// console.log(circleSlash(11)) // 9
// console.log(circleSlash(12)) // 11
// console.log(circleSlash(13)) // 13
// console.log(circleSlash(14)) // 15
// console.log(circleSlash(15)) // 1
// console.log(circleSlash(16)) // 3
// console.log(circleSlash(17)) // 5
// console.log(circleSlash(18)) // 7
// console.log(circleSlash(19)) // 9
// console.log(circleSlash(20)) // 11
// console.log(circleSlash(21)) // 13
// console.log(circleSlash(22)) // 15
// console.log(circleSlash(23)) // 17
// console.log(circleSlash(24)) // 19
// console.log(circleSlash(25)) // 21
// console.log(circleSlash(26)) // 23
// console.log(circleSlash(27)) // 25
// console.log(circleSlash(28)) // 27
// console.log(circleSlash(29)) // 29
// console.log(circleSlash(30)) // 31
// console.log(circleSlash(31)) // 1

// n 