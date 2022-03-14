
// Save / remove data
const LOCAL_STORAGE_KEY_TIPS = "app.Tips";
let tips = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TIPS)) || [];

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
		crncyBtn.style = "";
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

let saveDataBtn = document.querySelector(".save-data");
let removeDataBtn = document.querySelector(".remove-data");

saveDataBtn.addEventListener("click", () => {
	let tipPerPerson = document.querySelector("#tip-per-person").innerText;
	tipPerPerson = tipPerPerson.substring(0);

	let totalPerPerson = document.querySelector("#total-per-person").innerText;
	totalPerPerson = totalPerPerson.substring(0);

	let listContainer = document.querySelector(".saved-tips-container");
	let listHolder = document.createElement("ul");
	let listItemTipPP = document.createElement("li");
	let listItemTotPP = document.createElement("li");
	let iconRemove = document.createElement("i");
	listItemTipPP.innerHTML = "Tip Per Person " + tipPerPerson;
	listItemTotPP.innerHTML = "Total Per Person " + totalPerPerson;
	listItemTipPP.classList.add("tipPP-list-item");
	listItemTotPP.classList.add("totPP-list-item");
	listHolder.classList.add("list-holder", "add-item");
	iconRemove.classList.add("bi", "bi-x-circle-fill");

	// let pattern = new RegExp("([\£\$\¥\kr\])(?=[0])");
	listHolder.append(listItemTipPP, listItemTotPP, iconRemove);
	listContainer.appendChild(listHolder);
	let listHolders = document.querySelectorAll('.list-holder');
		if (listHolders.length > 8) {
			listContainer.style.height = 'auto';
		}
		else {
			listContainer.style.height = '650px';
		}

	const receipt = {
		tipPerPerson: tipPerPerson,
		totalPerPerson: totalPerPerson,
		id: Date.now().toString(),
	}
	tips.push(receipt);
	listHolder.setAttribute("data-id", receipt.id);
	listHolder.addEventListener("click", removeItem);
	saveList();
});
// Remove item on click
function removeItem(e) {
	let itemToRemove = e.currentTarget;
	itemToRemove.classList.remove("add-item");
	itemToRemove.classList.add("remove-item");
	setTimeout(function () {
		itemToRemove.remove(e);
	}, 350);

	let idOfObjectToRemove = e.currentTarget.getAttribute("data-id");
	tips = tips.filter((item) => item.id !== idOfObjectToRemove);
	saveList();
}

// Remove all items
removeDataBtn.addEventListener("click", (e) => {
	let listContainer = document.querySelector(".saved-tips-container");
	let listHolders = document.querySelectorAll('.list-holder');
	listHolders.forEach((listHolder) => {
		listHolder.classList.remove("add-item");
		listHolder.classList.add("remove-item");
		setTimeout(function () {
			listHolder.remove(e);
			listContainer.style.height = '650px';
		}, 350);
		
		tips = [];
		saveList();
	});
});
function saveList() {
	localStorage.setItem(LOCAL_STORAGE_KEY_TIPS, JSON.stringify(tips));
}

// function removeAllItems(event) {
// 	let itemsToRemove = event.innerHTML;
// 	itemsToRemove.remove(event);
// }


// let historyRoot = document.querySelector('#history-root');
// let clearHistoryBtn = document.querySelector('.clear-history');

// function historyList(items) {
// let historyList = document.createElement('ul');
// items.forEach((item) =>{
// let historyListItem = document.createElement('li');
// historyListItem.innerText = item;
// historyListItem.classList.add('history-list-item');
// historyListItem.addEventListener('click', removeHistory);
// historyList.append(historyListItem);
// });
// return historyList;
// }

// fetch("...")
// .then(response => {
//   return response.json();
// })
// .then(data => {

// })
