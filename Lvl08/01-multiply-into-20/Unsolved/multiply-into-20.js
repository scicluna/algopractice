const multiplyInto20 = function(arr) {
  // TODO: Write Your Code Here
  for (let i=0; i<arr.length; i++){
    const current = arr[i]
    for (let j=0; j<arr.length; j++){
      console.log((current * arr[j]) % 20)
      if ((current * arr[j]) / 20 === 1) return true
    }
  }
  return false
};