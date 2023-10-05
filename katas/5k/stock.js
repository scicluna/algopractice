/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/


//goal: use "shifting window" technique to find the window where the price is minimal and sell maximal
//so basically, every time we find a new lower price, we should change the start of the window

function maxProfit(prices) {
    let left = 0
    let right = 1
    let profit = 0
    while (right < prices.length) {
        profit = Math.max(profit, prices[right] - prices[left])
        if (prices[left] > prices[right]) {
            left = right
        }
        right++
    }
    return profit
}
console.log(maxProfit([7, 6, 4, 3, 1]))