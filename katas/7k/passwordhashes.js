// Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.
// Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).
// If you're not familiar with modules, see this kata.
// NodeJS documentation here. https://nodejs.org/api/
const {createHash} = require('crypto')


const passHash = (str) =>{
    const hash = createHash('md5')
    hash.update(str);
    return hash.digest('hex')
}

console.log(passHash('password'))