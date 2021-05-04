// TODO: Create HTML code from cars JSON

const carsJSON = '[{"make":"Ford","model":"Mustang","year":2010,"color":"black"},{"make":"Chevy","model":"Corvette","year":1984,"color":"red"},{"make":"Jeep","model":"Wrangler","year":1999,"color":"silver"}]'
// parse the JSON into a javascript object
const cars = JSON.parse(carsJSON)

// then you can target one or more objects in the array
console.log(cars[0])

// add an unordered list with the car info
let output = "<ul>"

// insert cars into the list-container div in the html
// document.querySelector("#list-container").innerHTML = "hello"
// TODO make output variable hold html with info about each car in the list
cars.forEach(function(cars){
    // output = output + `<li>${cars.make}, ${cars.model}, ${cars.color}</li>`
    output = output + `<li>${cars.make}}</li>`



})
document.querySelector("#list-container").innerHTML = output
