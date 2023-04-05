// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

var maxProfit = function (prices) {
    let greatestIndex = 0; 
    let greatestPrice;
    let lowestIndex = 0; 
    let lowestPrice;
    for (let i=0; i<prices.length; i++){
        if(!lowestPrice || (prices[i]<lowestPrice && i > greatestIndex) ){
            lowestIndex = i
            lowestPrice = prices[i]
            greatestPrice = prices[i]
        }
        if (!greatestPrice || (prices[i]>greatestPrice && i > lowestIndex)){
            greatestIndex = i
            greatestPrice = prices[i]
        }
    }
    return greatestPrice - lowestPrice
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))


// ```js
// var arr = [1, 6, 7, 9];
// ```

// * The following should be returned since buying when the stock is `1` and selling when the stock is `9` yields `8`:

// ```js
// 8;
// ```

// * Given the following array:

// ```js
// var arr = [9, 7, 4, 1];
// ```

// * The following should be returned since the stock decreases every day, there is no possible profit to be made:

// ```js
// 0;