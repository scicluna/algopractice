# def next_smaller(n):
#     int_map = {}
#     for number in str(n):
#         if number not in int_map:
#             int_map[number] = 1
#         else:
#             int_map[number] += 1

#     for int in range(n-1, -1, -1):

#         if len(str(int)) != len(str(n)):
#             return -1
        
#         number_map = {}
#         for number in str(int):

#             if number not in number_map:
#                 number_map[number] = 1
#             else:
#                 number_map[number] += 1

#         if all((number_map.get(k) == v for k, v in int_map.items())):
#             return int
    
#     return -1

def next_smaller(n):
    array = list(str(n))
    return int(("").join(recursive_check(array, -1)))

def recursive_check(array, pos):
    if pos == -(len(array)):
        return ['-1']
    if array[pos-1] > array[pos]:
        temp = array[pos]
        array[pos] = array[pos-1] 
        array[pos-1] = temp

        right_split = array[pos+1:]
        left_split = array[:pos+1]
        print(right_split)
        print(left_split)

        return sorted(left_split)+right_split
    else:
        return recursive_check(array, pos-1)

print(next_smaller(907))

# Failure.