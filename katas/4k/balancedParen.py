# Problem: Given a string containing just the characters (, ), {, }, [ and ], 
# determine if the input string is valid. An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# An empty string is also considered valid.

def balancedParen(parens:str)->bool:
    stack = []
    for char in parens:
        if char == '(' or char == '[' or char == '{':
            stack.append(char)
        elif stack and char == ')':
            cur = stack.pop()
            if cur != '(':
                return False
        elif stack and char == ']':
            cur = stack.pop()
            if cur != '[':
                return False
        elif stack and char == '}':
            cur = stack.pop()
            if cur != '{':
                return False
        else:
            return False
    return len(stack) == 0
print(balancedParen("{[]}"))