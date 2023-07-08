str = "hello"

function solution2(str) {
    if (str.length === 0) return "";
    return str[str.length - 1] + solution2(str.slice(0, str.length - 1))
}

console.log(solution2(str))