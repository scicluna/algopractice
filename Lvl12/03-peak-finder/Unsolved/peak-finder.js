const peakFinder = function(nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak

  let greatest;
  for (let i=0; i<nums.length; i++){
    if (nums[i] > greatest || !greatest) greatest = nums[i]
  }
  return greatest
};

const peakFinder2 = function(nums){
  return nums.reduce((a,b)=>Math.max(a,b))
}

console.log(peakFinder2([1,2,3,4,5]))
