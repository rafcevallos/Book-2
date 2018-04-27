const chats = document.querySelector("#messages")

const chatsArray = ["blahBlah1", "blahblah2", "blahBlah3", "blahblah4", "blahBlah5"]

// chatsArray.forEach(DaShitInDaArray => {
//     document.createElement('section')
    
// })


// Create a child chats item component for blahBlah1
const blahBlah1 = document.createElement('section')
blahBlah1.textContent = "Message 1"
chats.appendChild(blahBlah1)

// Create a child chats item component for blahBlah2
const blahBlah2 = document.createElement('section')
blahBlah2.textContent = "Message 2"
chats.appendChild(blahBlah2)

// Create a child chats item component for blahBlah3
const blahBlah3 = document.createElement('section')
blahBlah3.textContent = "Message 3"
chats.appendChild(blahBlah3)

// Create a child chats item component for blahBlah4
const blahBlah4 = document.createElement('section')
blahBlah4.textContent = "Message 4"
chats.appendChild(blahBlah4)

// Create a child chats item component for blahBlah5
const blahBlah5 = document.createElement('section')
blahBlah5.textContent = "Message 5"
chats.appendChild(blahBlah5)



// Virtual document fragment to contain components
const fragment = document.createDocumentFragment()

// Create BlahBlah6 Message
const blahBlah6 = document.createElement('section')
blahBlah6.textContent = "OMG"
fragment.appendChild(blahBlah6)

// Create BlahBlah7 Message
const blahBlah7 = document.createElement('section')
blahBlah7.textContent = "I added stuff"
fragment.appendChild(blahBlah7)

// Create BlahBlah7 Message
const blahBlah8 = document.createElement('section')
blahBlah8.textContent = "to the mutha effin' DOM!"
fragment.appendChild(blahBlah8)


// Append framents to DOM
document.querySelector("#messages").appendChild(fragment)