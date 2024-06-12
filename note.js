// Date May 20th
//Create a person object that contains three keys: name, age, and country.
//use yourself as an examole to set the values for name, age, and country.
// let person = {
//     name: "Mady",
//     age: 29,
//     country: USA
// }
 

//create a function, logData(), that uses the person object to create a string in the following format:
//"Per is 35 years old and lives in Norway"
// function logData() {
//     console.log(person.name + "is" + person.age + "years old and lives in " + person.country)
// }
//Call the logData() function to verify that it works.
// logData()




// less than 6 years old -> free
//6-17 years old -> child discount
// 18-26 -> student discount
// 27-66 full price
// over 66 -> senior citizrn discount

// let age = 15;

// if (age < 6) {
//     console.log("free");
// } else if (age > 6 && age < 17) {
//     console.log("child discount");
// } else if (age > 18 && age < 26) {
//     console.log("student discount");
// } else if (age > 27 && age < 66) {
//     console.log("full price");
// } else {
//     console.log("senior citizen discount");
// }

//create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable.


// let largeCountries = ["china", "India", "USA", "Indonesia", "Pakistan"]
// //use the for loop to log the following to the console

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }


//the 5 largest coutries in the worls
// - China
// India
// US
// Indinesia
// Packistan

// you need tp help me fix up the largeCountries unshift() and shift()
//Google how to use unshift() and shift()

/* use push() and pop() and their counterparts unshift() and shift() to 
fix the array so that China and Pakistan are added back into their respective places
*/
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia","Monaco"]

// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");

// for(let i = 0; i < largeCountries.length; i++){
//     console.log(largeCountries[i]);
// }

// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
// The shift() method changes the original array.

// The shift() method returns the shifted element.

//MAy 21st
// let dayOfMonth = 13
// let weekday = "Friday"

//if it is Friday the 13th, log out this spooky face: 😱
// use the logical "AND operator" -> &&

// if (weekDay === "Friday" && dayOfMonth === 13) {
//     console.log("🐱‍👤");
// }

// let hands = ["rock", "paper", "scissor"]

//create a function that returns a random item from the array

// function getHand() {
//     let ramdonIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand() )

// let drugs = ["cocaine", "weed", "meth", "molly" "heroin"]

// function getDrugs() {
//     let randomDrugs = Math.floor(Math.random() * 5)
//     return drugs[randomDrugs]
// }
// console.log(getDrugs() )

// let fruit = ["🍎", "🍊", "🍎", "🍎"]
// let appleShelf = documentElementById("apple-shelf")
// let orangeShelf = documentElementById("orange-shelf")

//create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use the for loop,
//a conditional statement, and the textContent property.

// function sortFruit() {
//     for (let i = 0; i < fruit.length; i++) {
//         if (fruit[i] === "🍎") {
//             appleShelf.textContent += "🍎"
//         } else if (fruit[i] === "🍊") {
//             orangeShelf.textContent += "🍊"
//         }
//     }
// }

//May 22nd

/* 1. Grab the box from the DOM and store it in a variable
   2. Add a click event listener to the box
   3. Log out "I want to open the box!" when it's clicked*/

//  let box = document.getElementById("box")

//  box.addEventListener("click", function(){
//     console.log("I want to open the box!")
//  })

/* Create a person object that contains three keys: name, age, and country
 Create a function logData(), that uses the persona object to create a 
 string in the following format:
 "Per is 35 yeras old and lives in Norway"
 Call the logData() function to verify that it works */

// let person = {
//     name: "Mady",
//     age: 29,
//     country: "USA"
// };

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in the " + person.country)
    


//May 28th

//if possible, use const. if not, use let.

//which variables below should be changed from let to const?

//the customer wants to order some stuff. Here are the details

// const basePrice = 520
// const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

//whoops! turns out the shipping will be a bit more complex

// shippingCost = 15
// shippingTime = "7-14 days"

//calculating fullPrice 
// const fullPrice = basePrice - discount + shippingCost

//finally, notifying the customer
// console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// May 30th

//template strings/literals
// const recupient = "James"
// const sender = "Mady"

//use your sender variable instead of "Per"
//Refactor the email string to use template strings
// const email = 'Hey" ${recipient}! How is it going? Cheers ${sender}'
// console.log(email)

//June 3rd

// JSON.parse turns a string into array
// JSON.stringify turns array into a string

// 1. turn the myLeads string into an array
// 2. push a new value to the array
// 3. turn the array into a string again
// 4. console.log the string using typeof to varify that it's a string

// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("myLeads")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

//May 10th

// const credits = 0

// if (credits > 0) {
//     console.log("Let's play!")
// } else {
//     console.log("Sorry, you have no credits")
// }

//null -> how you as a developer signalize emptiness
// undefined -> how JS signalizes emptiness
//NaN ->(not a number)
// When trying to find if true or false, use the if statement

//May 11th

// const welcomeEl = document.getElementById("welcome-el")
// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${Greeting}, ${name} ${emoji}`
// }
// greetUser("Hello", "Mady")

//create a function, add(), that adds 2 numbers together and returns the sum

// function add(num1, num2) {
//     return num1 + num2
// }
// console.log(add(3, 4) ) // should log 7
// console.log(add(9, 102) ) //should log 111

// Creat a function, getFirst(arr), that returns the first item in the array
// function getFirst(arr) {
//     return arr[0]
// }
// let firstCard = getFirst([10, 2, 5])
// console.log(firstCard)


// call it with an array as an argument to verify that it works

//June 12th
// query is an object containing a set of key-value pairs representing the query parameters of the URL.