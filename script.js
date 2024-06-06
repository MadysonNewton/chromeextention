
let myLeads = ["www.awesomeleads.com"]

myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')


//HINTS:
//localStorage.setItem(key, value)
//localStorage.getItem(key)
//localStorage.clear()
//PS: both key and value need to be strings


inputBtn.addEventListener("click", function() {
    // console.log("Button clicked from addEventListener")
    myLeads.push(inputEl.value);
    inputEl.value = ""
    //save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    //PS: remember Json.stringify()
    renderLeads()

    //to verify that it works:
    console.log(localStorage.getItem("myLeads"))
})
function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    //wrap the lead in an anchor tag (<a>) inside the <li>
    //can you make the link open in a new tab?
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>
`
}
ulEl.innerHTML = listItems
}
