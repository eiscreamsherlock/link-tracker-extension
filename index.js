let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const clearBtn = document.querySelector("#clear-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function() {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
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

clearBtn.addEventListener("click", function() {
  if (localStorage.getItem("myLeads")) {
    localStorage.clear();
    ulEl.innerHTML = '';
  }
});

function renderLeads() {
  let listItems = "";
  renderList = JSON.parse(localStorage.getItem("myLeads"));
  for (let i = 0; i < renderList.length; i++) {
    thisItem = renderList[i];
    listItems += `
      <li>
        <a href='${thisItem}' target='_blank'>
          ${thisItem}
        </a>
      </li>`;
  };
  ulEl.innerHTML = listItems;
}


renderLeads();

// function renderLeads() {
//   let listItems = "";
//   renderList = JSON.parse(localStorage.getItem("myLeads"));
//   // for (let i = 0; i < myLeads.length; i++) {
//   for (let i = 0; i < renderList.length; i++) {
//     thisItem = myLeads[i];
//     listItems += `
//       <li>
//         <a href='${myLeads[i]}' target='_blank'>
//           ${myLeads[i]}
//         </a>
//       </li>`;
//   };
//   ulEl.innerHTML = listItems;
// }
