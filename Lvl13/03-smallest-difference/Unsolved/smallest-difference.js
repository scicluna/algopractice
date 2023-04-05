// Write a function that takes in two sorted arrays and returns a pair of numbers
// (one from each array) with the smallest difference.

// TODO: Solve the function below:

var smallestDifference = function (arr1, arr2) {
    let smallestDifference;
    let no1save;
    let no2save;

    let i=0
    let j=0

    while(i<=arr1.length-1 && j<=arr2.length-1){
        let no1 = arr1[i]
        let no2 = arr2[j]

        let difference = Math.abs(no1-no2)
        if (!smallestDifference || difference < smallestDifference){
            smallestDifference = difference
            no1save = no1
            no2save = no2
        }   


        console.log(i)
        if (i < arr1.length-1){
            i++
        } else {
            i = 0
            j++
        }
    }

    return [no1save, no2save]
};

console.log(smallestDifference([-9, 0, 15, 30, 31, 40, 99],  [36, 47, 58, 69, 80, 101]))
