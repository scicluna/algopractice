// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
    const arr = str.split('')
    const result = []
    arr.forEach(element=>{
        result.unshift(element)
    })
    return result.join('')
};

console.log(reverse('hello'))