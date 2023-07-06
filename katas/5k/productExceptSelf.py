# Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
# The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
# You must write an algorithm that runs in O(n) time and without using the division operation.

#my recursive answer, this works but runs into overflow errors at insanely large lists
def productExceptSelf(nums):
    def walk(nums, curr, new, neo): 
        if new == len(nums):
            new = 0
        if curr == new:
            curr += 1
            new = curr+1
            if curr == len(nums):
                return neo
            if new == len(nums):
                new = 0

        neo[curr] *= nums[new]
        return walk(nums, curr, new+1, neo)
    return walk(nums, 0, 1, [1]*len(nums))

#chat gpt assisted version
def productExceptSelf2(nums):
    # Initialize two empty arrays
    prefix_products = [1] * len(nums)
    suffix_products = [1] * len(nums)
    output = [1] * len(nums)

    # Generate prefix products
    for i in range(1, len(nums)):
        prefix_products[i] = prefix_products[i-1] * nums[i-1]

    # Generate suffix products
    for i in range(len(nums)-2, -1, -1):
        suffix_products[i] = suffix_products[i+1] * nums[i+1]

    # Generate output
    for i in range(len(nums)):
        output[i] = prefix_products[i] * suffix_products[i]

    return output

print(productExceptSelf2([1,2,3,4,5,6,7]))




