def generateParenthesis(n):
    results = []
    combo(n, n, [], results)
    return results
    
def combo(lefts, rights, stack: list, results: list):
    if rights < lefts or lefts < 0 or rights < 0: 
        return
    if rights == 0 and lefts == 0:
        results.append(("").join(stack))
        return
    
    combo(lefts - 1, rights, stack + ['('], results)
    combo(lefts, rights - 1, stack + [')'], results)

print(generateParenthesis(2))
