//given a string of html, close every other div
// ex "<div><p>Here is a <div> tag </p>" => "<div><p>Here is a </div> tag </p>"

function closeSecondDiv(html) {
    let correctString = ""
    let divOpen = false
    for (let i = 0; i < html.length; i++) {
        if (html[i] == '<' && html[i + 1] == 'd' && html[i + 2] == 'i') {
            if (divOpen) {
                correctString += '</'
                divOpen = false
            } else {
                correctString += '<'
                divOpen = true
            }
        } else {
            correctString += html[i]
        }
    }
    return correctString
}

console.log(closeSecondDiv("<div><p>Here is a <div> tag </p><div><div>"))