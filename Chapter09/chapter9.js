// Copy this entire code example into a Quokka project
const _1948 = [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6]
const _1949 = [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7]
const _1950 = [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0]
const _1951 = [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1]
const _1952 = [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]

// Turns the above into an Object Array
const RainfallDatabase = {
    "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
    "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
    "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
    "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
    "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
  }

// Local Storage is used to make data PERSISTENT aka ALWAYS AVAILABLE even across projects
// JSON = JavaScript Object Notation
// Stringify converts objects into a string aka represent an Object as a string

  localStorage.setItem("rainfall", JSON.stringify(RainfallDatabase))
//   Even if you hide the above, it will still be saved in the brower just because.  It is PERSISTENT.  Weird.

// Simplified Version
const monthsGreaterThan6 = RainfallDatabase["1949"].filter(r => r >= 6.0)
console.log(monthsGreaterThan6);

const averageRainfall = RainfallDatabase["1950"].reduce(
    (total, thisMonth) => total + thisMonth
) / RainfallDatabase["1950"].length

// "toFixed" turned the number into a string, so we MUST use parseFloat
console.log(parseFloat(averageRainfall.toFixed(2)));

//"Complex" version of above
// const monthsGreaterThan6 = RainfallDatabase["1949"].filter(
//     rainfall => {
//         if (rainfall >= 6.0) {
//             return true
//         }
//     }
// )

// console.log(monthsGreaterThan6)


// const totalRainfall = RainfallDatabase["1951"].reduce((first, second) => {
//     return first + second
// })

// console.log(totalRainfall)

// // // Find out how much total rain has fallen over last 5 years
// // const allRainfall = RainfallDatabase.reduce(
// //   function(currentSet, nextSet) {
// //     return currentSet.concat(nextSet)
// //   }
// // ).reduce(
// //   function(total, monthlyRainfall) {
// //     return total + monthlyRainfall
// //   }
// // )

// // console.log(allRainfall)

