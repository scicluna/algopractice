// Write a function that takes in an integer and returns it as a Roman numeral string

var intToRoman = function(num) {
    let str=''
    while(num > 0){
        console.log(num)
        if (num > 1000){
            num -= 1000
            str += 'M'
        } else if (num >= 900){
            num -= 900
            str += 'CM'
        } else if (num >= 500){
            num -= 500
            str += 'D'
        } else if (num >= 400){
            num -= 400
            str += 'CD'
        } else if (num >= 100){
            num -= 100
            str += 'C'
        } else if (num >= 90){
            num -= 90
            str += 'XC'
        } else if (num >= 50){
            num -= 50
            str += 'L'
        } else if (num >= 40){
            num -= 40
            str += 'XL'
        } else if (num >= 10){
            num -= 10
            str += 'X'
        } else if (num >= 9){
            num -= 9
            str += 'IX'
        } else if (num >= 5){
            num -= 5
            str += 'V'
        } else if (num >= 4){
            num -= 4
            str += 'IV'
        } else if (num >= 1){
            num -= 1
            str += 'I'
        }
    }
return str
};

console.log(intToRoman(9))

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000

