// Sanger information
const candidate = Object.create({}, {
    candidateName: {
        enumerable: true,
        writable: false,
        value: "Elizabeth Sanger"
    },
    district: {
        enumerable: true,
        writable: false,
        value: "5th District"
    },
    taxes: {
        enumerable: true,
        writable: false,
        value: "Higher taxes for the rich. Lowers taxes for middle class."
    },
    jobs: {
        enumerable: true,
        writable: false,
        value: "Jobs are a right.  Not a privilege.  Universal basic income for lower and middle class."
    },
    infrastructure: {
        enumerable: true,
        writable: false,
        value: "Fix the roads.  Bring mass transit to the city."
    },
    healthcare: {
        enumerable: true,
        writable: false,
        value: "Health care for all.  It is a right."
    },
    crime: {
        enumerable: true,
        writable: false,
        value: "Less policing of lower income areas."
    }
})

// Sanger Bio
const candidateBio = Object.create({}, {
    biography: {
        enumerable: true,
        writable: false,
        value: "Elizabeth Sanger was born in Bangor, Maine and has served as Mayor and Governer of that state.  She graduated from Tralal Univserity and works with a variety of non-profit organizations prior to her political career.  She has 2 kids and a dog named Boogaloo."
    }
})

// Sanger Mission Statement
const missionStatement = Object.create({}, {
    mission: {
        enumerable: true,
        writable: false,
        value: "To serve the needs of the constituents in the 5th district with intergrity and vigor."
    }
})

// Voter Object
const voter = Object.create({}, {
    firstName: {
        enumerable: true,
        writable: false,
        value: "Rafael"
    },
    lastName: {
        enumerable: true,
        writable: false,
        value: "Cevallos"
    },
    address: {
        enumerable: true,
        writable: false,
        value: "123 Mr. Rogers Lane"
    },
    email: {
        enumerable: true,
        writable: false,
        value: "raffytaffy2225@gmail.com"
    },
    phone: {
        enumerable: true,
        writable: false,
        value: "615-867-5309"
    },
    availability: {
        enumerable: true,
        writable: false,
        value: "Evenings and weekends."
    },
    volunteerType: {
        enumerable: true,
        writable: false,
        value: "Operate phones and voter registration"
}
})

// Voting and Donation URLs
const links = Object.create({}, {
    donation: {
        enumerable: true,
        writable: false,
        value: "https://www.crowdpac.com/contribute/382835?amount=25"
    },
    registration: {
        enumerable: true,
        writable: false,
        value: "https://ovr.govote.tn.gov/"
    }
})

// Calendar of Events - Possible to link Google Calendar in future"
const calendar = Object.create({}, {
    title: {
        enumerable: true,
        writable: false,
        value: "Townhall at YMCA Community Center"
    },
    date: {
        enumerable: true,
        writable: false,
        value: "May 4th, 2018"
    },
    startTime: {
        enumerable: true,
        writable: false,
        value: "6:30 PM"
    },
    endTime: {
        enumerable: true,
        writable: false,
        value: "9:00 PM"
    }
})

// Images for Candidate
const images = Object.create({}, {
    headshot: {
        enumerable: true,
        writable: false,
        value: "https://www.organicheadshots.com/images/headshot06-thumb.jpg"
    },
    family: {
        enumerable: true,
        writable: false,
        value: "https://i.pinimg.com/originals/95/43/85/954385ed142a03e7b19cd46d6b5191f5.jpg"
    },
    constituents: {
        enumerable: true,
        writable: false,
        value: "http://www.decusoft.com/wp-content/uploads/2016/02/diverse-community.jpg"
    }
})


// Functions Junction

//Voter Address Function: Update voter's address
const newAddress = {
    address: "123 Mr. Rogers Lane"
}
// Function to change voter address
const changeAddress = (voter, address, value1) => {
    console.log(voter[address] = value1)
}
// calls function changeAddress and makes it 1602 Grumpy Trash
changeAddress(newAddress, "address", "1602 Grumpy Trash Lane");


// Change candidate district
const newDistrict = {
    district: "5th District"
}
// Function to change candidate district
const changeDistrict = (candidate, district, value2) => {
    console.log(candidate[district] = value2)
}
// calls function changeDistrict and makes it 12th District
changeDistrict(newDistrict, "district", "12th District")


// Advanced Challenge
const documentBody = document.querySelector("#body")

const modifyPhone = document.createElement("article")
// <article>
modifyPhone.setAttribute("id", voter.firstName, voter.lastName)
// <article id="Rafael Cevallos
modifyPhone.textContent = voter.phone
// <article id="615-867-5309"
// Rafael Cevallos
// </article>

documentBody.appendChild(modifyPhone)

