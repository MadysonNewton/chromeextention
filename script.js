
let myLeads = ["www.awesomeleads.com", "wwww.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
 const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
 //grab the unordered list and store it in a const variable called ulEl

 //push the value "www.awesomeLead.com" to myArray when the input button is clicked

inputBtn.addEventListener("clicked", function() {
//push the value from the inputEl into the myLeads array
//instead of the hard=coded "www.awesomeLead.com" value
//google -> "get the value from inputfield javascript"

    myLeads.push(inputEl.value)
    console.log(myLeads)
})

//log out the item in the myLeads array using a for loop
//render the leads in the unordered list using ulEl.textContent

for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
}
