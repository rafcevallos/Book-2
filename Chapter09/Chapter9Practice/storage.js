// Define the database as an object
const HomeInventoryDatabase = {}

// Define the arrays (a.k.a. tables) in the database to store each type of items
HomeInventoryDatabase.furniture = []
HomeInventoryDatabase.crafts = []
HomeInventoryDatabase.electronics = []

// Ghost Bed is a furniture data item
const ghostBed = {
    name: "Ghost Bed",
    location: "Left side of the room.",
    description: "I got this tempurpedic bed to help with my lower back problems.  It supports all the contours of my body when I sleep on my left side.  I no longer have back issues!"
}

// Korean Lamp is a furniture data item
const koreanLamp = {
    name: "Korean Lamp",
    location: "Left side of the bed on a small table.",
    description: "Even though I am American, I still want to represent my heritage at home in a simple way.  My mother gifted me this lamp."
}

// Bookshelf is a furniture data item
const bookshelf = {
    name: "Bookshelf",
    location: "Front wall of the room facing my bed.",
    description: "I keep one bookshelf so I don't hoard books.  Once I run out of space, I either sell or trade books."
}

// Laptop Table is a furniture data items
const laptopTable = {
    name: "Laptop Table",
    location: "Packed away under my bed when not in use.",
    description: "I got this table so I can browse and work on my laptop in bed so I can keep my back supported.  It cools the laptop and charges my devices."
}

// Poster Porfolios are CRAFT data items
const posterPortfolios = {
    name: "Poster Porfolios",
    location: "Packed away under my bed when I'm not displaying posters.",
    description: "I love poster art of geeky properties, and like supporting artists."
}

// Comics are CRAFT data items
const comics = {
    name: "Comics",
    location: "On top of the 2x2 Shelf next to the closet.",
    description: "I've started buying hardcover, collected editions of comics to get back into one of my childhood loves."
}

// Vinyl are CRAFT data items
const vinyl = {
    name: "Vinyl",
    location: "In the 2x2 shelf cubicles mentioned in Comics.",
    description: "I primarily have vinyl of local artists or recordings my friends or I have played on."
}

// TV is an ELECTRONICS data item
const tv = {
    name: "TV",
    location: "On top of the 4x4 shelf in front of the bed.",
    description: "I use the TV for streaming movies/shows as well as gaming or as a larger screen for my laptop."
}

// Laptop is an ELECTRONICS data item
const computer = {
    name: "Computer",
    location: "Usually on the bedside table.",
    description: "I do EVERYTHING on my laptop."
}

// Turntable is an ELECTRONICS data item
const turntable = {
    name: "Turntable",
    location: "Currently, packed away until I move.",
    description: "My first entry level turntable since plastic turntables by Crosley are the worst."
}


// Place each defined object into a database table (these are actually arrays) using the push() method.
HomeInventoryDatabase.furniture.push(ghostBed, koreanLamp, bookshelf, laptopTable)
HomeInventoryDatabase.crafts.push(posterPortfolios, comics,vinyl)
HomeInventoryDatabase.electronics.push(tv, computer, turntable)


// const saveDatabase = function (database, HomeInventory) {
// /*
//     Convert the Object into a string.
// */
//     const stringifiedDatabase = JSON.stringify(database)
// /*
// Create a key in local storage, and store the string
// version of your inventory database as the value
// */
//     localStorage.setItem(HomeInventory, stringifiedDatabase)
// }

// saveDatabase(HomeInventoryDatabase, "Home Inventory");


// Simplified Version of Above -- so much easier -- Storing
localStorage.setItem("Home Inventory DB", JSON.stringify(HomeInventoryDatabase))


// Function to Load Database saved in browser
const loadDatabase = function (HomeInventoryDatabase) {
    // Get the string version of the database
    const databaseString = localStorage.getItem("Home Inventory DB")

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}