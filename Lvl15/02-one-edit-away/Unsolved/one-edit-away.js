const oneEditAway = function(str1, str2) {
// TODO: Write function that takes in two strings and returns true if one character away, otherwise false
    const map1 = {}
    const map2 = {}

    for (let i=0; i<str1.length; i++){

        if (map1[str1[i]])map1[str1[i]]++
        else map1[str1[i]] = 1
    }

    for (let i=0; i<str2.length; i++){

        if (map2[str2[i]])map2[str2[i]]++
        else map2[str2[i]] = 1
    }

    let difference = 0
    for (letter in map1){
        if(map1[letter] - map2[letter] != 0){
            difference += map1[letter]-map2[letter]
        }
    }
    return difference == 1
}


console.log(oneEditAway('hello', 'hello'))