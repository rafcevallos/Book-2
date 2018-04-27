// C IS FOR COOKIE -- FOR LOOP SCOPE
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



// CONJUNCTION FUNCTION
const conjunction = (firstWord, secondWord) => (`${firstWord}${secondWord}`)

console.log(conjunction("Master", "Card"))



// SIMON SAYS
const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

let invalidLocation = false
for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        console.log("This location is invalid")
    }
    console.log(`There were ${k} locations displayed`)
}


// LAMBDA LLAMA
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = possibleNames[Math.floor(Math.random() * 7)]
    return `${randomizer} the Bahama Mama Llama!`

    const suffix = " the Llama"
    const name = possibleNames[randomizer]

    return name + suffix
}

nameMaker = llamaNamer()
console.log(nameMaker)