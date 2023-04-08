// without telling me the answer: give me a hint for this algorythm problem
// Write a function which makes a list of strings representing all of the ways you can balance n pairs of parentheses

// Examples
// balancedParens(0) => [""]
// balancedParens(1) => ["()"]
// balancedParens(2) => ["()()","(())"]
// balancedParens(3) => ["()()()","(())()","()(())","(()())","((()))"]

// Hint: You can solve this problem using recursion. In your recursive function, you'll want to keep track of the 
// number of open and close parentheses you can still add. At each step, you have two choices:

// If you have any open parentheses left to add, you can add an open parenthesis.
// If you have any close parentheses left to add and the number of close parentheses is greater than the number of 
// open parentheses, you can add a close parenthesis.
// Base case: When you have no more open or close parentheses to add, add the generated string to your result.

// Keep building the string using these rules and explore all possible combinations by calling the recursive function with updated 
// counts of open and close parentheses.

//NO IDEA WHAT IM DOING
const allBalancedParentheses = (n) => {
    
    if (n == 0) return ['']

    let open = n
    let close = n

    let answers = []
    let str =''
    while(open > 0 || close > 0){

        if (close > open){
            str += ')'
            close--
        } else if (open <= close){
            str += '('
            open--
        }
    }
    if(open == 0 && close == 0){
        answers.push(str)
        const otherAnswers = allBalancedParentheses(n-1)
        answers.push(...otherAnswers)
    }
    return answers
}

console.log(allBalancedParentheses(2))