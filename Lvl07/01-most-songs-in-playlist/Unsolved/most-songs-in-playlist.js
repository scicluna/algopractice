// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  const sortedArray = arr.sort((a,b)=>a-b)
  let total = 0

  for (let i=0; i<sortedArray.length; i++){
    if (total == 0 || total + sortedArray[i] <= 60){
      total += sortedArray[i]
    } else return i
  }
  return arr.length
};

console.log(mostSongsInPlaylist([5,2,4,2,3,6, 10, 11, 41, 12]))