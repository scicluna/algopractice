#list is always in ascending order
#so, if we have [2,3,4,5,6,7,8] and the target is 5
#we start at 2 and 8. 2+8 > 5, which means we move right pointer left. this will solve the problem.
#can i think of any edge cases where it doesnt? no, i dont think so.

def twoSum(numbers: list[int], target: int) -> list[int]:
    left = 0
    right = len(numbers)-1
    while (left < right):
        if(numbers[left] + numbers[right] == target):
            return [left+1, right+1]
        if(target > numbers[left]+numbers[right]):
            left += 1
        else:
            right -= 1

print(twoSum([2,7,11,15], 22))