def firstbad(array:list[bool])->int:
    left, right = 0, len(array)-1
    while left <= right:
        mid = (left+right)//2
        if array[mid]:
            right = mid-1
        else:
            left = mid+1
    return left

print(firstbad([False,False,False,False,False,False, True, True, True, True]))

#[F,F,F,F,F,T,T]