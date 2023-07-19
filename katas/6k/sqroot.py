# Problem: Square Root of an Integer

# Given a non-negative integer x, compute and return the square root of x. Since the return type is an integer, the decimal digits are truncated, 
# and only the integer part of the result is returned. Your solution should have a time complexity of O(log n).
def sqroot(number: int)->int:
    left, right = 0, number

    while left <= right:
        mid = (left+right)//2
        if mid * mid <= number and (mid+1) * (mid+1) > number:
            return mid
        elif mid * mid > number:
            right = mid-1
        else:
            left = mid+1
    
    
#[0,1,2,3,4,5,6,7,8]

print(sqroot(1))