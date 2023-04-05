// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function(str) {
    const stack=[]

    for (let i=0; i<str.length; i++){
        const symbol = str[i]
        if (symbol == '(' || symbol == '[' || symbol == '{'){
            stack.push(symbol)
        } else  if((stack[stack.length-1] == '(' && symbol == ')') || (stack[stack.length-1] == '[' && symbol == ']') || (stack[stack.length-1] == '{' && symbol == '}')){
            stack.pop()
        } else if (symbol != ' ') return false
    }
    if (stack[stack.length-1] == '(' || stack[stack.length-1] == '[' || stack[stack.length-1] == '{' ) return false
    return true
};

console.log(validBrackets("[ ( ) ]"))