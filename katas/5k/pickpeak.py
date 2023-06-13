# In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

# For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

# The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, 
# then the output should be {pos: [], peaks: []}.

# Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

# All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

# The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is 
# after and before and therefore, we don't know if it is a peak or not).

# Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, 
# please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} 
# (or equivalent in other languages)

def pick_peaks(arr):
    picked_peak = {'pos': [], 'peaks': []}
    if len(arr) == 0:
        return picked_peak

    last_char = arr[0]
    next_char = arr[2]
    begin_peak = 0
    for i in range(len(arr)):
        if i == 0 or i == len(arr)-1:
            continue
        else:
            if last_char < arr[i]:
                if arr[i] == next_char and not begin_peak:
                    begin_peak = i
                elif next_char < arr[i]:
                    picked_peak['pos'].append(i)
                    picked_peak['peaks'].append(arr[i])
            if begin_peak > 0 and next_char < arr[i]:
                picked_peak['pos'].append(begin_peak)
                picked_peak['peaks'].append(arr[begin_peak])
                begin_peak = 0
            if begin_peak > 0 and next_char != arr[i]:
                begin_peak = 0
        last_char = arr[i]
        if i < len(arr)-2:
            next_char = arr[i+2]
    return picked_peak

print(pick_peaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))
