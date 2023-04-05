// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique

const minIncrement = function(arr) {
    let increments = 0;
    let notunique = true

    
    while(notunique){
        notunique = false;

        let sortedArray = arr.sort((a,b)=>a-b)

        sortedArray.forEach((num, i)=>{
            if (num == sortedArray[i+1]){
                sortedArray[i]++
                increments++
                notunique=true
            }
        })
    }
    return increments
};

//FASTER
const minIncrement2 = function(arr){
    let increments=0
    let map = {}

    for (let i=0; i<arr.length; i++){
        const current = arr[i]
        if(map[current]) {
            increments++
            arr[i]++
            i--
        }
        else (map[current]) = true
    }

    return increments
}

console.log(minIncrement2([3, 2, 1, 2, 1, 7]))