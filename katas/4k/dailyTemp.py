#plan:
#we need to loop over the temperatures
#we need to compare temperatures to each other or keep some kind of tally 
#maybe use a map and iterate the map every time it isnt max?
#shitty double loop though, i doubt this is right.
#okay...
#so we stack each high temp and pop when we hit a max temp and check the stack for how many are on it still?
#aka, if we have [30,60,90] our stack would first be hightemp=[30] so then we get to [60] and our length would be one?
#no, idk if that works...

#works, but is too slow
def dailyTemperatures(temperatures: list[int]):
    hightemps = []
    tempgaps = [0] * len(temperatures)
    for i in range(len(temperatures)):
        if not hightemps:
            hightemps.append(temperatures[i])
        
        tempgaps[i] = findNextHighest(i, temperatures, hightemps)
    return tempgaps

def findNextHighest(curr, temperatures, hightemps):
    
    count = 0
    for temp in temperatures[curr:]:
        if temp > hightemps[-1]:
            hightemps.pop()
            return count
        else:
            count += 1

    if hightemps:
        hightemps.pop()
        return 0
        
def dailyTemp(temperatures: list[int]):
    gap = [0]*len(temperatures)
    for i in range(len(temperatures)):
        slice = temperatures[i:]
        done = False
        for j in range(len(slice)):
            if slice[j] <= temperatures[i]:
                gap[i] += 1
            elif slice[j] > temperatures[i]:
                done = True
                break
        if done == False:
            gap[i] = 0
    return gap

def realDailyTemp(temperatures: list[int]):
    gap=[0]*len(temperatures)
    stack = []

    for i, temp in enumerate(temperatures):
        while stack and temperatures[stack[-1]] < temp:
            cur = stack.pop()
            gap[cur] = i - cur
        stack.append(i)
    return gap
            

print(dailyTemp([73,74,75,71,69,72,76,73]))