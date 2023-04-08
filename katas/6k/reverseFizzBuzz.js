// FizzBuzz is often one of the first programming puzzles people learn. Now undo it with reverse FizzBuzz!

// Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

// Notes:

// If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
// All numbers in the sequence will be greater than zero.
// You will never receive an empty sequence.
// Examples
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

//FAILURE
// const reverseFizzBuzz = (string) =>{
//     const array = string.split(' ')
//     const newArray = []

//     for (let i=0; i<array.length; i++){
//         if(!isNaN(Number(array[i]))){
//             newArray.push(array[i])
//         }
//         else {
//             let number = 1;
//             if(array[i] == 'FizzBuzz'){
//                 while (number % 15 !== 0 || (i < array.length - 1 && !isNaN(Number(array[i + 1])) && number >= parseInt(array[i + 1]))){
//                     number++
//                 }
//             }else if(array[i] == 'Fizz'){
//                 while (number % 3 !== 0 || (i < array.length - 1 && !isNaN(Number(array[i + 1])) && number >= parseInt(array[i + 1]))){
//                     number++
//                 }
//             } else if (array[i] == 'Buzz'){
//                 while (number % 5 !== 0 || (i < array.length - 1 && !isNaN(Number(array[i + 1])) && number >= parseInt(array[i + 1]))){
//                     console.log('buzz')
//                     number++
//                 }
//             } else console.log('error')
//             newArray.push(number)
//             number = 1
//         }
//     }
//     console.log(newArray)
// }


//ACTUAL SOLUTION
function reverseFizzBuzz2(string) {
    const array = string.split(' ');
    let startingPoint = 1;
  
    while (true) {
      let currentString = '';
      for (let i = startingPoint; i < startingPoint + array.length; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          currentString += 'FizzBuzz';
        } else if (i % 3 === 0) {
          currentString += 'Fizz';
        } else if (i % 5 === 0) {
          currentString += 'Buzz';
        } else {
          currentString += i;
        }
  
        if (i < startingPoint + array.length - 1) {
          currentString += ' ';
        }
      }
  
      if (currentString === string) {
        break;
      }
      startingPoint++;
    }
  
    const result = [];
    for (let i = startingPoint; i < startingPoint + array.length; i++) {
      result.push(i);
    }
    return result;
}

//BETTER. IM SO FUCKING DUMB
function reverseFizzBuzz3(s){
    const specialCases = {
        'Fizz': [3],
        'Buzz': [5],
        'FizzBuzz': [15],
        'Fizz Buzz': [9, 10],
        'Buzz Fizz': [5, 6]
    }

    if (s in specialCases){
        return specialCases[s]
    }

    const splitString = s.split(' ');
    const index = splitString.findIndex(ele => !isNaN(ele))
    const startNumber = parseInt(splitString[index])

    return splitString.map((ele, i) => startNumber + i - index )
}

console.log(reverseFizzBuzz3("1 2 Fizz 4 Buzz"))