//JPMORGANISHIRING
//3 Rows

//J R  
//POGN
//M A 

//4 rows
//J  A 
//P GN 
//MR  
//O    

//2 rows
//JMRA
//POGN

function staggeredRows(string, rows) {
    let output = []

    let row = 0
    let letter = 0
    let decrement = false

    while (output.length != rows) {
        if (row == letter) {
            output.push([string[letter]])
            letter++
            if (row == rows - 1) {
                decrement = true
                row--
            } else row++
        }
    }

    //[['J'], ['P']]. ['M']]

    while (output.flat().length != string.length) {

        if (decrement) {
            output[row].push(string[letter])
            letter++
            if (row == 0) {
                decrement = false
                row++
            } else row--
        } else if (!decrement) {
            output[row].push(string[letter])
            letter++
            if (row == rows - 1) {
                decrement = true
                row--
            } else row++
        }
    }
    console.log(output)


    return output.flat().join('')
}

console.log(staggeredRows("JPMORGAN", 4))
