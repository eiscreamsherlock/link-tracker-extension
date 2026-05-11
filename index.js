let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const clearBtn = document.querySelector("#clear-btn");
const tabBtn = document.querySelector("#tab-btn");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    thisItem = leads[i];
    listItems += `
      <li>
        <a href='${thisItem}' target='_blank'>
          ${thisItem}
        </a>
      </li>`;
  };
  ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputBtn.click();
  }
});

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

clearBtn.addEventListener("dblclick", function() {
  if (localStorage.getItem("myLeads")) {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
  }
});
