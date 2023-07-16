# Given n non-negative integers representing an elevation map where the width of each bar is 1, 
# compute how much water it can trap after raining.

def trap(self, h):
    if not h:
        return 0
    
    left, right = 0, len(h)-1
    max_left, max_right = h[left], h[right]
    rain = 0

    while left < right:
        max_left, max_right = max(max_left, h[left]), max(max_right, h[right])
        if max_left < max_right:
            rain += max_left - h[left]
            left += 1
        else:
            rain += max_right - h[right]
            right -= 1
    return rain

#better, but no cigar
# def trap(h:list[int])->int:
#     if len(h) < 2:
#         return 0

#     l = 0
#     r = 1
#     lmax = h[l]
#     rmax = h[r]
#     rain = 0
#     while r < len(h)-1:

#         if h[r] > h[l]:
#             rmax = h[r]
#             while l < r-1:
#                 l=l+1
#                 rain += max(min(lmax-h[l], rmax-h[l]),0)    
#             l = r
#             r = l+1
#             lmax = h[l]
#             rmax = h[r]
#         else:
#             r=r+1

#         if h[r] >= h[r-1]:
#             rmax = h[r]

#         if r == len(h)-1:
#             while h[r] < h[r-1]:
#                 rmax = h[r-1]
#                 r -= 1
                
#             while l < r-1:
#                 l+=1
#                 rain += max(min(lmax-h[l], rmax-h[l]),0)  
#             break  
                
#     return rain


# [0,1,0,2,1,0,1,3,2,1,2,1]
# 
#       3
#   2RRR32R2
# 1R21R132121

#rules?
#rain can only occupy spaces between the apex of two "lands"
#"pointers?"
#"can never be on the edges"
#single scan of array?
#track rains in an array?
#plan. left = 0, right = 1
#shift right if < land[left] -> record a rain based on land[left]-land[right]
#keep going until land[right] > land[left] then update left to right and right to left+1 and repeat





# def trap(height:list[int])->int:
#     left = 0
#     right = 1
#     pendingrain = 1
#     raincount = 0
#     while pendingrain:
#         pendingrain=0
#         while right < len(height):
#             if height[left] < height[right] and height[left-1] > height[right]:
#                 raincount += min(height[left-1] - height[left], height[right]-height[left])
#             if height[right] < height[left]:
#                 pendingrain += height[left] - height[right]
#                 right += 1
#             else:
#                 left = right
#                 right = left+1
#                 raincount += pendingrain
#                 pendingrain = 0
#         left += 1
#         right = left + 1
#     return raincount




print(trap([4,3,3,9,3,0,9,2,8,3]))