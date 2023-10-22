# for s = "abacabad" the output should be 'c'
# c and d are non-repeating chars, but c is the first one

# plan - loop over string. place each char in a dictionary. look for first 1 result or return '_'

def solution(string):
    letterdict = {}
    for char in string:
        if char not in letterdict:
            letterdict[char] = 1
        else:
            letterdict[char] += 1
    for key in letterdict:
        if letterdict[key] == 1:
            return key
    return '_'

print(solution('abacabad'))