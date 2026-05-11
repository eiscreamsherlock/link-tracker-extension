let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const clearBtn = document.querySelector("#clear-btn");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

function renderLeads(leads) {
  let listItems = "";
  // renderList = JSON.parse(localStorage.getItem(`${leads}`));
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
    renderLeads(myLeads);
  }
});

// Can't be bothered to do a bunch of mouse clicking during testing like some kind of windows
// user...
inputEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    inputBtn.click();
  }
});

clearBtn.addEventListener("dblclick", function() {
  if (localStorage.getItem("myLeads")) {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
  }
});
