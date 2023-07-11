#Each position is one width
#We will have to loop over the heights.
#Trim the array with. if heights[i] < heights[i-1]: heights[i-1] = heights[i]
#Loop over heights once again. keep track of largest rectangle we find. 
#ideas: if height[i] == height[i-1] put height[i] into a stack with a tuple (height[i],2)
#if height[i] == stack[-1] add one to the tuple
#pop the stack and compare the tuples multiplication to the current height[i]. if its bigger, we readd the tuple otherwise, we just append the new tuple (5,1)
#I believe that the first in the stack will be our answer with this logic.  

def largestRectangleArea(heights):
    heights.append(0)
    stack = [-1]
    maximum = 0

    for i in range(len(heights)):
        while heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            w = i - stack[-1] - 1
            maximum = max(maximum, h * w)
        stack.append(i)
    return maximum

print(largestRectangleArea([9,0]))
