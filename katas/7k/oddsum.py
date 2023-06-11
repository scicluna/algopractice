# Given the triangle of consecutive odd numbers:

#              1
#           3     5
#        7     9    11
#    13    15    17    19
# 21    23    25    27    29
# ...
# Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

# 1 -->  1
# 2 --> 3 + 5 = 8

def row_sum_odd_numbers(n):
    pyramid = [1]
    last = 1

    for i in range(n):
        for j in range(i+1):
            if i != 0:
                pyramid.append(last+2)
                last += 2
    return sum(pyramid[-n:])

print(row_sum_odd_numbers(5))