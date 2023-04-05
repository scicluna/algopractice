// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var caesarCipher = function(str, offset) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const alphabetCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let caeser = ''
    for (let i=0; i<str.length; i++){

        while (Math.abs(offset) >= 26){
            if (offset < 0){
                offset += 26
            } else offset -= 26
        }

        if (alphabetCap.includes(str[i])){
            let alphabetIndex = alphabetCap.indexOf(str[i])
            alphabetIndex += offset

            while(alphabetIndex >= 26){
                alphabetIndex -= 26
            }

            while(alphabetIndex < 0){
                alphabetIndex += 26
            }
    
            caeser += alphabetCap[alphabetIndex]
        } else if (alphabet.includes(str[i])){
            let alphabetIndex = alphabet.indexOf(str[i])
            alphabetIndex += offset

            while(alphabetIndex>=26){
                alphabetIndex -= 26
            }

            while(alphabetIndex < 0){
                alphabetIndex += 26
            }
    
            caeser += alphabet[alphabetIndex]
        } else{
            caeser += str[i]
        }
    }
    return caeser
};

//'Hello World' offset=1
//Ifmmp Xpsme

console.log(caesarCipher('Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl', -31 ))