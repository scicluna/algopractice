// Write a function that takes in a Roman Numeral string and returns its integer form

var romanToInt = function(str) {

    let numerals = []
    let currentStr = ''
    for (let i=0; i<str.length; i++){
        if (str[i] == 'C' && (str[i+1] == 'M' || str[i+1] == 'D')){
            currentStr += str[i] + str[i+1]
            numerals.push(currentStr)
            currentStr = ''
            i++
        } else if (str[i] == 'X' && (str[i+1] == 'C' || str[i+1] == 'L')){
            currentStr += str[i] + str[i+1]
            numerals.push(currentStr)
            currentStr = ''
            i++
        } else if (str[i] == 'I' && (str[i+1] == 'X' || str[i+1] == 'V')){
            currentStr += str[i] + str[i+1]
            numerals.push(currentStr)
            currentStr = ''
            i++
        } else {
            currentStr += str[i]
            numerals.push(currentStr)
            currentStr = ''
        }
    }

    console.log(numerals)

    let total = 0
    for (let i=0; i<numerals.length; i++){
        switch(numerals[i]){
            case 'I':{
                total += 1
                break;
            }
            case 'IV':{
                total += 4
                break;
            }
            case 'V':{
                total += 5
                break;
            }
            case 'IX':{
                total += 9
                break;    
            }
            case 'X':{
                total += 10
                break;
            }
            case 'XL':{
                total += 40
                break;
            }
            case 'L':{
                total += 50
                break;
            }
            case 'XC':{
                total += 90
                break;
            }
            case 'C':{
                total += 100
                break;
            }
            case 'CD':{
                total += 400
                break;
            }
            case 'D':{
                total += 500
                break;
            }
            case 'CM':{
                total += 900
                break;
            }
            case 'M':{
                total += 1000
                break;
            }
        }
    }
    return total
};


console.log(romanToInt('MDCCXXXVIII'))