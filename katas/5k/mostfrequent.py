#Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


def topKFrequent(nums, k):
    map = {}
    for num in nums:
        if num in map:
            map[num] += 1
        else:
            map[num] = 1
    map = sorted(map.items(), key=lambda x: x[1], reverse=True)[:k]
    solution = []
    for i in map:
        solution.append(i[0])
    return solution
    
print(topKFrequent([1,1,1,2,2,3], 2))



