// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. 
// Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. 
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [3, 5],
//    [7, 10],
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

const sumIntervals = (intervals) => {
    const sInt = intervals.sort((a, b) => a[0] - b[0]);

    const realIntervals = []
    let start = sInt[0][0]
    let end = sInt[0][1]
    sInt.forEach((interval, i) => {
        if (interval[0] <= end && interval[1] > end){
            end = interval[1]
        }

        if (interval[0] > end){
            realIntervals.push([start, end])
            start = interval[0]
            end = interval[1]
        }

        if (i == sInt.length-1){
        realIntervals.push([start, end])
        }
    })
    

    let total = 0;
    realIntervals.forEach(interval=>{
        total += (interval[1] - interval[0])
    })
    return total
}

console.log(sumIntervals([[1,5], [5,10]]))