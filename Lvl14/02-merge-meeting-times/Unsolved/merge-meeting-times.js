// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

var mergeMeetingTimes = function(arr) {
    const sorted2dArray = arr.sort()
    
    const schedule = []
    let beginningOfABlock;
    let endOfABlock;
    for (let i=0; i<sorted2dArray.length; i++){
        if (!beginningOfABlock){
            beginningOfABlock = sorted2dArray[i][0]
        }

        if (sorted2dArray[i][0] > endOfABlock){
            schedule.push([beginningOfABlock, endOfABlock])
            beginningOfABlock = sorted2dArray[i][0]
            endOfABlock = sorted2dArray[i][0]
        }

        if (!endOfABlock || endOfABlock < sorted2dArray[i][1]){
            endOfABlock = sorted2dArray[i][1]
        }

        if (i == sorted2dArray.length-1){
            schedule.push([beginningOfABlock, endOfABlock])
        }
    }
    return schedule
};

// [[1,4]] [[5,8]] [[9, 12]]
// output the same thing

// [[1,4]] [[4,6]] [[9,12]]
// output [[1,6]] [[9,12]]

console.log(mergeMeetingTimes([ [9, 12], [1,4], [3,8],]))