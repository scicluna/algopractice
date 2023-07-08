# Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

# Implement the MinStack class:

# MinStack() initializes the stack object.
# void push(int val) pushes the element val onto the stack.
# void pop() removes the element on the top of the stack.
# int top() gets the top element of the stack.
# int getMin() retrieves the minimum element in the stack.
# You must implement a solution with O(1) time complexity for each function.

class MinStack(object):

    def __init__(self):
        self.stack = []
        self.minstack = []
        
    def push(self, val):
        self.stack.append(val)
        if not self.minstack or self.minstack[-1] >= val:
            self.minstack.append(val)

    def pop(self):
        popped = self.stack.pop()
        if popped == self.minstack[-1]:
            self.minstack.pop()
        
    def top(self):
        if self.stack:
             return self.stack[-1]

    def getMin(self):
        if self.minstack:
            return self.minstack[-1]
        
stack = MinStack()
print(stack.push(0))
print(stack.push(1))
print(stack.push(0))
print(stack.getMin())
print(stack.pop())
print(stack.getMin())