let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSon.parse(localStorage.getItem("myLeads"))

console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url: "https://wwww.linkedin.com/in/per-harald-borgen/"}
 ]
//listen for clicks on the tabBtn. log per's linkedin URL to the colsole
tabBtn.addEventListener("click", function() {
    //save the url instead of logging it out
    myLeads.push(tab[0].url)
tabBtn.value = ""
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)

})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML = listItems
    }

deleteBtn.addEventListener("dblclick", function (){
   console.log("double clicked!")
   localStorage()
   myLeads = []
   render(myLeads)
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)

})

