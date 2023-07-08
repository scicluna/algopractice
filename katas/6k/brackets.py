# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

def isValid(s: str):
    """
    :type s: str
    :rtype: bool
    """
    stack = []
    for char in s:
        if char == '(' or char == '{' or char == '[':
            stack.append(char)
        else:
            if char == ')':
                if len(stack)>0 and stack[-1] == '(':
                    stack.pop()
                else:
                    return False
            if char == '}':
                if len(stack)>0 and stack[-1] == '{':
                    stack.pop()
                else:
                    return False
            if char == ']':
                if len(stack)>0 and stack[-1] == '[':
                    stack.pop()
                else:
                    return False
    if len(stack) > 0:
        return False
    else:
        return True
print(isValid(']'))