// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    const result = []

    let i =0
    let j =0
    while( i < arr1.length || j < arr2.length){
        if (!arr1[i] || arr1[i] > arr2[j]) {
            result.push(arr2[j])
            j++
        } else if (!arr2[j] || arr2[j] >= arr1[i]){
            result.push(arr1[i])
            i++
        }
    }
    return result
};

console.log(mergeSorted([1,3], [2,4]))