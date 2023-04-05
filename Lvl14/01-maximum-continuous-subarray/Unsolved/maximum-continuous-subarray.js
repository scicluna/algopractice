const maxSumArray2 = function(numbers) {
  // Write your solution here
  let lastTotal = 0
  let currentTotal = 0

  if (numbers.length <= 2) return numbers.reduce((a,b)=>a+b)

  numbers.forEach((number, i)=>{
    
    currentTotal += number

    if (currentTotal < lastTotal && number < currentTotal*-1){
      currentTotal = 0
    }

    if (currentTotal > lastTotal){
      lastTotal = currentTotal
    }
  })
  return lastTotal
};


// > Note: Contiguous refers to items that are next to each other in sequence. In the array [1, 2, 3, -27, 5], 
// for example, [1, 2, 3] is a contiguous subarray while [1, 2, 3, 5] is not, since 5 is not directly next to 3 in the sequence. 

//hits more edge cases
const maxSumArray = (numbers) => {
  
  if (numbers.length < 3) return numbers.reduce((a,b)=> a+b)
  
  let maxTotal = numbers[0]
  let currentMax = numbers[0]

  for (let i=1; i<numbers.length; i++){
    const maxAdd = Math.max(numbers[i], currentMax+=numbers[i])
    
    currentMax = maxAdd

    maxTotal = Math.max(maxTotal, currentMax)
  }

  return maxTotal
}
console.log(maxSumArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
