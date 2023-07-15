#Worked, but was too slow
# def threeSum(nums: list[int])->list[list[int]]:
#     lastfixed = -1
#     fixed = 0
#     left = 0
#     right = len(nums)-1
#     answers = []
#     sortedlist = sorted(nums)
#     while (left < right):
#         if sortedlist[fixed] == sortedlist[lastfixed] and fixed+1 != len(nums)-2:
#             fixed += 1
#             left = 0
#             right = len(nums)-1
#         elif (sortedlist[fixed] + sortedlist[left] + sortedlist[right] == 0 and fixed != left and fixed != right):
#             sortedanswer = sorted([sortedlist[fixed], sortedlist[left], sortedlist[right]])
#             if sortedanswer not in answers:
#                 answers.append(sortedanswer)

#         if (left == fixed):
#             left += 1
#         elif (0 > sortedlist[right] + sortedlist[left] + sortedlist[fixed]):
#             left += 1
#         else:
#             right -= 1

#         if (left == right and fixed+1 != len(nums)-2):
#             lastfixed = fixed
#             fixed += 1
#             left = 0
#             right = len(nums)-1
#     return answers

def threeSum(nums: list[int])->list[list[int]]:
    nums.sort()
    result_set = set()
    for fixed in range(len(nums)-2):
        if fixed > 0 and nums[fixed] == nums[fixed-1]:
            continue
        left, right = fixed+1, len(nums)-1

        while left < right:
            sum = nums[fixed]+nums[left]+nums[right]
            if sum == 0:
                result_set.add((nums[fixed],nums[left],nums[right]))

                left += 1
                while left < right and nums[left] == nums[left-1]:
                    left += 1

                right -= 1
                while left < right and nums[right] == nums[right+1]:
                    right -= 1

            elif sum < 0:
                left += 1
            else:
                right -= 1
    return [list(triplet) for triplet in result_set]

print(threeSum([-2,0,1,1,2]))