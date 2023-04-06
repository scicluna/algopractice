// A combination is a way of selecting members from a group in which the order does not matter.

// Write a function that returns all the combinations of a given size from a list.

// combinations :: Int -> [a] -> [[a]]

// examples:

// combinations 1 [1,2,3] should be [[1],[2],[3]]

// combinations 2 [1,2,3] should be [[1,2],[1,3],[2,3]]

// http://en.wikipedia.org/wiki/Combination

//FAILED ATTEMPT
// const combinations = (arrayOfIntegers, numberOfCombinations) => {
//     const superSet = []

//     let iteration = 0
//     while (iteration < numberOfCombinations){
//         arrayOfIntegers.forEach((integer, i) => {
//             if (!superSet[i]) superSet.push([integer])
//             if (iteration > 0){
//                 superSet.forEach(set=>{
//                     if(!set.includes(integer)) set.push(integer)
//                 })
//             }
//             console.log(superSet)
//         })
//     iteration++
//     }
//     return superSet;    
// }

// console.log(combinations([1,2,3], 2))

// MORE FAIL
// const combinations = (arrayOfIntegers, numberOfCombinations) => {
//     const superSet = []

//     if (numberOfCombinations == 1) {
//         arrayOfIntegers.forEach(integer=>{
//             superSet.push([integer])
//         })
//     }

//     let combinations = numberOfCombinations
//     let subset = []
//     for (let i=0; i<arrayOfIntegers.length; i++){
//         const currentNumber = arrayOfIntegers[i]
//         subset.push(currentNumber)

//     }

//     return superSet
// }
// console.log(combinations([1,2,3], 1))

//AMAZING RECURSIVE HAX. MUST LEARN
const combinations = (arrayOfIntegers, numberOfCombinations) => {
    if (numberOfCombinations === 0) return [[]]
    if (arrayOfIntegers.length === 0) return []

    const [head, ...tail] = arrayOfIntegers

    const withHead = combinations(tail, numberOfCombinations-1).map((combination) => [head, ...combination])
    const withoutHead = combinations(tail, numberOfCombinations)

    return [...withHead, ...withoutHead]
}

console.log(combinations([1,2,3], 2))

