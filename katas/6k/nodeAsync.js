// If you have completed my previous katas Intro to NodeJS and Password Hashes, you should know the gist of requiring node modules into your code. If you are new to NodeJS and haven't completed the previous katas, I recommend you do so.

// As it turns out, unless you are coding something really processor intensive, the slowest parts of nearly any program is I/O. One of NodeJS' key features is the ability to asynchronously deal with I/O, and is thus the focus of this kata.

// Kata Specifications
// To practice NodeJS Async conventions, we will create the function execute that asynchronously runs a Bash command to Codewars' linux environment (think command-line Windows users).

// The execute function takes 2 parameters: a command string and a callback function. Your function should essentially begin the command, and whenever the command is complete, run the callback function.

// To actually run a command, you will need to read about the Child Process NodeJS module. https://nodejs.org/api/child_process.html#child_process_class_childprocess
const { exec } = require('child_process')

const execute = (command, callback) => {
    exec(command, (error, stdout, stderr) =>{

        if(error) return callback(Error(error))

        callback(null, stdout)
    })
}