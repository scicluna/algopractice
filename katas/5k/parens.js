function isValid(string) {
    const stack = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
            stack.push(string[i])
        } else {
            if (string[i] === ')') {
                if (stack[stack.length - 1] === '(') {
                    stack.pop()
                } else {
                    return false
                }
            }
            if (string[i] === '}') {
                if (stack[stack.length - 1] === '{') {
                    stack.pop()
                } else {
                    return false
                }
            }
            if (string[i] === ']') {
                if (stack[stack.length - 1] === '[') {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
    }
    return stack.length === 0
}

console.log(isValid(']'))