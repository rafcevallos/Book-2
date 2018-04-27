// Function to Load Database saved in browser
const loadDatabase = function (HomeInventoryDatabase) {
    // Get the string version of the database
    const databaseString = localStorage.getItem("Home Inventory DB")
    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

const HomeInventoryDatabase = loadDatabase()

const inventoryEl = document.querySelector("#myStuff")

for (let type in HomeInventoryDatabase) {
    const currentTypeArray = HomeInventoryDatabase[type]

    currentTypeArray.forEach(itemInArray => {
        const itemSection = document.createElement("section")
    
// looping through the array and creates "p" element filled with array items
        for (let prop in itemInArray) {
            const pComponent = document.createElement("p")
            pComponent.textContent = itemInArray[prop]
            itemSection.appendChild(pComponent)
            inventoryEl.appendChild(itemSection)
        }

    })
}

const parentSection = document.getElementById("#myStuff")
const newListElement = document.createElement("li")
const r = document.createTextNode("woo hoo")
newListElement.appendChild(r)
parentSection.appendChild(newListElement)

