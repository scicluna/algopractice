// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays

//SLOWER
var arrayIntersection = function(arr1, arr2) {
    const result = [];

    for (let i=0; i<arr1.length; i++){
        const current1 = arr1[i]
        for (let j=0; j<arr2.length; j++){
            const current2 = arr2[j]
            if (current1 === current2){
                result.push(current1)
                arr2[j] = null
            }
        }
    }
    return result
};

//FASTER
var arrayIntersection2 = function(arr1, arr2){
    const result = []
    const map = {}

    arr1.forEach(element =>{
        if (map[element]) map[element]++
        else map[element] = 1
    })

    arr2.forEach(element =>{
        if (map[element]) result.push(element)
    })
    return result
}

console.log(arrayIntersection2([8,8,3,4], [3,8,8,6]))