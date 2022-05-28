const crncyBtn = document.querySelector(".crncy-btn");
const crncyList = document.querySelector(".crncy-list");
const sweCrncyOpt = document.querySelector(".swe-crncy-option");
const usCrncyOpt = document.querySelector(".us-crncy-option");
const ukCrncyOpt = document.querySelector(".uk-crncy-option");
const jpCrncyOpt = document.querySelector(".jp-crncy-option");
const crncySpans = document.querySelectorAll("span.crncy");
const crncySpanFirst = document.querySelector("span:first-child");

// switch currencies
crncyBtn.addEventListener("click", () => {
  crncyList.classList.toggle("hide");

  if (crncyList.classList.contains("hide") === false) {
    crncyBtn.classList.add("active");
    crncyBtn.style = `
		background-color:rgb(35, 149, 243);
		color: rgb(255, 255, 255);
		border: 1px solid rgb(255, 255, 255);
		`;
  } else {
    crncyList.classList.remove("active");
    crncyBtn.style = `
		color: var(--blue);
    background-color: rgb(255, 255, 255);
    border: 1px solid var(--blue);`;
  }
});

// get input elements
const sliders = document.querySelectorAll('input[type="range"]');
const billInput = document.querySelector("#bill");
sliders.forEach((slider) => {
  slider.addEventListener("input", calcTip);
});
billInput.addEventListener("change", calcTip);

usCrncyOpt.addEventListener("click", () => {
  usCrncyOpt.classList.add("active-crncy");
  sweCrncyOpt.classList.remove("active-crncy");
  ukCrncyOpt.classList.remove("active-crncy");
  jpCrncyOpt.classList.remove("active-crncy");
  calcTip();
});
sweCrncyOpt.addEventListener("click", () => {
  usCrncyOpt.classList.remove("active-crncy");
  sweCrncyOpt.classList.add("active-crncy");
  ukCrncyOpt.classList.remove("active-crncy");
  jpCrncyOpt.classList.remove("active-crncy");
  calcTip();
});
// UK
ukCrncyOpt.addEventListener("click", () => {
  usCrncyOpt.classList.remove("active-crncy");
  sweCrncyOpt.classList.remove("active-crncy");
  ukCrncyOpt.classList.add("active-crncy");
  jpCrncyOpt.classList.remove("active-crncy");
  calcTip();
});
// UK
jpCrncyOpt.addEventListener("click", () => {
  usCrncyOpt.classList.remove("active-crncy");
  sweCrncyOpt.classList.remove("active-crncy");
  ukCrncyOpt.classList.remove("active-crncy");
  jpCrncyOpt.classList.add("active-crncy");
  calcTip();
});
// calculate
function calcTip() {
  // get input values
  let bill = parseFloat(billInput.value);
  let tipPercent = document.querySelector("#tip").value;
  let NoOfPpl = document.querySelector("#no-of-people").value;
  billInput.value = bill.toFixed(2);

  // calculate input values
  let totTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
  let tot = parseFloat((bill + totTip).toFixed(2));
  let tipPP = (totTip / NoOfPpl).toFixed(2);
  let totPP = (tot / NoOfPpl).toFixed(2);

  // US
  if (usCrncyOpt.classList.contains("active-crncy")) {
    crncySpanFirst.innerHTML = "$";
    document.querySelector("#tip-amount").innerHTML = `\$${totTip}`;
    document.querySelector("#total-amount").innerHTML = `\$${tot}`;
    document.querySelector("#tip-percent").innerHTML = `${tipPercent}\%`;
    document.querySelector("#split-num").innerHTML = NoOfPpl;
    document.querySelector("#tip-per-person").innerHTML = `\$${tipPP}`;
    document.querySelector("#total-per-person").innerHTML = `\$${totPP}`;
  }
  // SWE
  if (sweCrncyOpt.classList.contains("active-crncy")) {
    crncySpanFirst.innerHTML = "kr";
    document.querySelector("#tip-amount").innerHTML = `${totTip}\kr`;

    document.querySelector("#total-amount").innerHTML = `${tot}\kr`;

    document.querySelector("#tip-percent").innerHTML = `${tipPercent}\%`;

    document.querySelector("#split-num").innerHTML = NoOfPpl;

    document.querySelector("#tip-per-person").innerHTML = `${tipPP}\kr`;

    document.querySelector("#total-per-person").innerHTML = `${totPP}\kr`;
  }
  // UK
  if (ukCrncyOpt.classList.contains("active-crncy")) {
    crncySpanFirst.innerHTML = "£";
    document.querySelector("#tip-amount").innerHTML = `\£${totTip}`;

    document.querySelector("#total-amount").innerHTML = `\£${tot}`;

    document.querySelector("#tip-percent").innerHTML = `${tipPercent}\%`;

    document.querySelector("#split-num").innerHTML = NoOfPpl;

    document.querySelector("#tip-per-person").innerHTML = `\£${tipPP}`;

    document.querySelector("#total-per-person").innerHTML = `\£${totPP}`;
  }
  // Japan
  if (jpCrncyOpt.classList.contains("active-crncy")) {
    crncySpanFirst.innerHTML = "¥";
    document.querySelector("#tip-amount").innerHTML = `\¥${totTip}`;

    document.querySelector("#total-amount").innerHTML = `\¥${tot}`;

    document.querySelector("#tip-percent").innerHTML = `${tipPercent}\%`;

    document.querySelector("#split-num").innerHTML = NoOfPpl;

    document.querySelector("#tip-per-person").innerHTML = `\¥${tipPP}`;

    document.querySelector("#total-per-person").innerHTML = `\¥${totPP}`;
  }
}
calcTip();


const tipContainer = document.querySelector(".saved-tips-container");
const tipItems = document.querySelector(".saved-tips-items");
const saveDataBtn = document.querySelector(".save-data");
const removeDataBtn = document.querySelector(".remove-data");
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");
const sidenavCloseBtn = document.querySelector("#sidenav-close-btn");
const sidenavOpenBtn = document.querySelector('#sidenav-open-btn');
const sidenavIcon = document.querySelector('#sidenav-open-icon');
const inactiveSidenav = document.querySelector('.inactive');
let toggleSidenavStyle = document.head.appendChild(document.createElement('style'));

sidenavOpenBtn.addEventListener("click", () => {
  tipContainer.classList.toggle('inactive-sidenav');
  if (tipContainer.classList.contains('inactive-sidenav')) {
    sidenavIcon.classList.remove('bi-arrow-bar-right');
    sidenavIcon.classList.add('bi-arrow-bar-left');
    tipContainer.classList.remove('active-sidenav');
    toggleSidenavStyle.innerHTML = `
      .sidebar, #sidenav-open-btn{
            transform: translateX(0);      
      }
      body {
        overflow-x:hidden;  
    }
      `;
  }
  if (tipContainer.classList.contains('inactive-sidenav') !== true) {
    console.log("show");
    sidenavIcon.classList.remove('bi-arrow-bar-left');
    sidenavIcon.classList.add('bi-arrow-bar-right');
    tipContainer.classList.add('active-sidenav');
    toggleSidenavStyle.innerHTML = `
      .sidebar, #sidenav-open-btn{
        transform: translateX(-345px);      
      }
      .sidebar{
        height: 99%;
        margin: 8px 0;
        border-radius: 5px;
      }
      body {
        overflow-x:hidden;  
    }
      `;

  }
});
sidenavCloseBtn.addEventListener("click", () => {
  tipContainer.classList.remove('active-sidenav');
  tipContainer.classList.add('inactive-sidenav');
  setTimeout(() => {
    toggleSidenavStyle.innerHTML = `
    .sidebar, #sidenav-open-btn{
      transform: translateX(0);      
    }
    body {
      overflow-x:hidden;  
  }
  .inactive-sidenav{
    transform: translateX(100%);
    }
    `;
  }, 350)

});

const LOCAL_STORAGE_KEY_TIPS = "app.Tips";
let tips = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TIPS)) || [];

function toggleTipContainer() {
  // tipContainer.style.display = tips.length === 0 ? "none" : "flex";
  if (tips.length > 0) {
    tipContainer.classList.remove('inactive-sidenav');
    tipContainer.classList.add('active-sidenav');
    toggleSidenavStyle.innerHTML = `
  .sidebar, #sidenav-open-btn{
    transform: translateX(-345px);  
  }
  .sidebar{
    height: 99%;
    margin: 8px 0;
    border-radius: 5px;
  }
  body {
    overflow-x:hidden;  
}
  `;
  }
  if (tips.length === 0) {
    setTimeout(() => {
      tipContainer.classList.remove('active-sidenav');
      tipContainer.classList.add('inactive-sidenav');
      toggleSidenavStyle.innerHTML = `
  .sidebar, #sidenav-open-btn{
            transform: translateX(0);      
  }
  body {
    overflow-x:hidden;  
}
  `;
    }, 350)
  }
}
function addHeightTipContainer() {
  tipContainer.style.height = tips.length > 8 ? "max-content" : "auto";
}

let id = Date.now().toString();
function addItem(tipPP, totalPP) {
  tips.push({
    tipPP,
    totalPP,
    id
  });
  saveList();
  return { tipPP, totalPP, id };
}

function createListElement({ tipPP, totalPP, id }) {
  // Create elements
  let listItems = document.createElement("ul");
  listItems.classList.add("list-holder", "add-item");

  let listItemTip = document.createElement("li");
  listItemTip.classList.add("tipPP-list-item");

  let listItemTotal = document.createElement("li");
  listItemTotal.classList.add("totPP-list-item");

  let listItemIcon = document.createElement("i");
  listItemIcon.classList.add("bi", "bi-x-circle-fill");

  // Fill the content
  listItemTip.innerText = `Tip Per Person ${tipPP}`;
  listItemTotal.innerText = `Total Per Person ${totalPP}`;

  // Add to the DOM
  listItems.append(listItemTip, listItemTotal, listItemIcon);
  tipItems.appendChild(listItems);

  listItems.setAttribute("data-id", id);
  listItems.addEventListener("click", removeItem);
  toggleTipContainer();
  addHeightTipContainer();
}

tips.forEach(createListElement);

saveDataBtn.addEventListener("click", () => {
  id = Date.now().toString();
  const newItem = addItem(
    tipPerPerson.innerHTML,
    totalPerPerson.innerHTML,
  );
  createListElement(newItem);
});

function removeItem(e) {
  let itemToRemove = e.currentTarget;
  itemToRemove.classList.remove("save-item");
  itemToRemove.classList.add("remove-item");
  setTimeout(function () {
    itemToRemove.remove(e);
  }, 300);
  let idOfObjectToRemove = e.currentTarget.getAttribute("data-id");
  tips = tips.filter((item) => item.id !== idOfObjectToRemove);
  toggleTipContainer();
  addHeightTipContainer();
  saveList();
}

removeDataBtn.addEventListener("click", (e) => {
  let listItems = document.querySelectorAll('.list-holder');
  listItems.forEach((listItem) => {
    listItem.classList.remove("add-item");
    listItem.classList.add("remove-item");
    setTimeout(function () {
      listItem.remove(e);
    }, 300);
    tips = [];
  });
  toggleTipContainer();
  addHeightTipContainer();
  saveList();
});

function saveList() {
  localStorage.setItem(LOCAL_STORAGE_KEY_TIPS, JSON.stringify(tips));
}
toggleTipContainer();