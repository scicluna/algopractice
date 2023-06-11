# 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
# The sum of these squares is 84100 which is 290 * 290.

# Task
# Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

# We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) 
# will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

# Example:
# list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
# list_squared(42, 250) --> [[42, 2500], [246, 84100]]
# The form of the examples may change according to the language, see "Sample Tests".

# Note
# In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: 
# you can use dynamically allocated character strings.

def list_squared(start, end):
    list = []
    for i in range(end):
        
        square = float((((i/1)**2)+((i/2)**2)+((i/3)**2)+((i/6)**2)))
        other_add = 0
        if i > 6:
            other_add = 50
        if i < 6: 
            other_add = 14
        if i < 3:
            other_add = 5
        if i < 2: 
            other_add = 1
        final_square = square + other_add
        sqroot = final_square // 2
        if sqroot % 2 == 0:
            list.append([i, final_square])
    return list

print(list_squared(1,250))

#merci, i dont know what a divisor is apparently