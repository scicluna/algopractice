# There are n cars going to the same destination along a one-lane road. The destination is target miles away.

# You are given two integer array position and speed, both of length n, where position[i] is the position of the ith car and speed[i] 
# is the speed of the ith car (in miles per hour).

# A car can never pass another car ahead of it, but it can catch up to it and drive bumper to bumper at the same speed. 
# The faster car will slow down to match the slower car's speed. The distance between these two cars is ignored 
# (i.e., they are assumed to have the same position).

# A car fleet is some non-empty set of cars driving at the same position and same speed. Note that a single car is also a car fleet.

# If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.

# Return the number of car fleets that will arrive at the destination.
# if speed + position > stack -> fleet++

#road gives us position + speed (i + car)
#put speed on stack
#once we pop the stack (reaching a speed) we compare road[i] + speed >= stack.pop()
#if it does, they merge into a fleet, if it doesnt we know the first part of the stack was a fleet
#if it merges, we simply keep adding to stack like normal -> once it doesnt, we record a fleet and continue like normal
#if any cars remain in stack, we have that many fleets

# my attempt, barely doesnt work
def carFleet(target: int, position: list[int], speed: list[int]):
    road = [0]*(target+1)
    stack = []
    fleets = {}
    for i, pos in enumerate(position):
        road[pos] = speed[i]
    for i in range(target, -1, -1):
        attempts = 1
        while stack and road[i] != 0:
            cur = stack.pop()
            if road[i] * attempts + i  >= road[cur] * attempts + cur and road[cur] * attempts + cur <= target:
                road[i] = 0
                fleets[cur] = 1
                stack.append(cur)
            elif i + road[i] * attempts >= target:
                
                fleets[cur] = 1
            else:
                attempts += 1
                stack.append(cur)
        if road[i] != 0:
            stack.append(i)
    if stack:
        fleets[stack[0]] = 1
    return len(fleets)

#better
def carFleet2(target: int, position: list[int], speed:list[int]) -> int:
    cars = sorted(zip(position, speed))
    times = [float(target - p) / s for p, s in cars]
    ans = 0
    while len(times) > 1:
        lead = times.pop()
        if lead < times[-1]:
            ans += 1
        else:
            times [-1] = lead
    return ans + bool(times)

print(carFleet2(10, [6,8], [3,2]))

