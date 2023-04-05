// Write a function that takes in an absolute file path and simplifies it

var simplifyPath = function(path) {
    let pathArray = path.split('/').filter(symbol => symbol)
    
    const stack = []
    pathArray.forEach(element => {
        if (element == '..' && stack[stack.length-1]){
            stack.pop()
        } else if (element === '.' || element === '..'){
            
        } else {
            stack.push(element)
        }
    })
    return `/${stack.join('/')}`
};

console.log(simplifyPath('/a/../../b/../c//.//'))
