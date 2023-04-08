// Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form +
// [quotient, remainder] (vector<string> {quotient, remainder} in C++).

// a and b can be very large (at the order of 10^150 to 10^200)
// As usual, your result should not have leading 0s
// require is disabled in JavaScript. Do it yourself ;-)

//This works, but it's not what the kata wants. -- pretty proud of this overall tbh.
function divideStrings2(a,b) {
    function divisor(a,b){

        let aReal = BigInt(a)
        let bReal = BigInt(b)

        let division = aReal/bReal
        
        return division.toString().replace(/n/, '')
    }
    
    function remainder(a,b){

        let aReal = BigInt(a)
        let bReal = BigInt(b)

        let remainder = aReal % bReal

        return remainder.toString().replace(/n/, '')
    }
    
    
    return [divisor(a,b), remainder(a,b)];  // This doesn't work on big numbers!
  }

  //GPT attempt fails badly
  function divideStrings(a, b) {
    function addStrings(num1, num2) {
      let i = num1.length - 1;
      let j = num2.length - 1;
      let carry = 0;
      let res = '';
  
      while (i >= 0 || j >= 0 || carry > 0) {
        const n1 = i >= 0 ? parseInt(num1[i--], 10) : 0;
        const n2 = j >= 0 ? parseInt(num2[j--], 10) : 0;
        const sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        res = (sum % 10) + res;
      }
  
      return res;
    }
  
    function compareStrings(num1, num2) {
      if (num1.length !== num2.length) {
        return num1.length - num2.length;
      }
      for (let i = 0; i < num1.length; i++) {
        if (num1[i] !== num2[i]) {
          return num1[i] - num2[i];
        }
      }
      return 0;
    }
  
    function subtractStrings(num1, num2) {
      let i = num1.length - 1;
      let j = num2.length - 1;
      let carry = 0;
      let res = '';
  
      while (i >= 0) {
        const n1 = parseInt(num1[i], 10) - carry;
        const n2 = j >= 0 ? parseInt(num2[j], 10) : 0;
        let diff = n1 - n2;
  
        if (diff < 0) {
          diff += 10;
          carry = 1;
        } else {
          carry = 0;
        }
  
        res = diff + res;
        i--;
        j--;
      }
  
      return res.replace(/^0+/, '');
    }
  
    let quotient = '0';
    let remainder = a;
  
    while (compareStrings(remainder, b) >= 0) {
      let multiple = '1';
      let temp = b;
  
      while (compareStrings(addStrings(temp, temp), remainder) <= 0) {
        multiple = addStrings(multiple, multiple);
        temp = addStrings(temp, temp);
      }
  
      quotient = addStrings(quotient, multiple);
      remainder = subtractStrings(remainder, temp);
    }
  
    return [quotient, remainder];
  }
  console.log(divideStrings(70203849665807834665364240718839046606302136916044344670497099006921071319657043432610300000000, 278599321321731528318038890487582093519261628479052639188783588522790171674586631659000))