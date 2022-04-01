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


// global variables
// let test = [];
let saveDataBtn = document.querySelector(".save-data");
let removeDataBtn = document.querySelector(".remove-data");
let listContainer = document.querySelector(".saved-tips-container");
let container = document.createElement("div");
container.classList.add("container");
function createList() {
	let tipPerPerson = document.querySelector("#tip-per-person").innerText;
	let totalPerPerson = document.querySelector("#total-per-person").innerText;

	let receipt = {
		tipPerPerson,
		totalPerPerson,
		id: Date.now().toString()
	};
	tips.push(receipt);

	let listHolder = document.createElement("ul");
	listHolder.classList.add("list-holder", "add-item");
	// let tipString = JSON.stringify(tips);
	// let newTipString = tipString.split(',');
	// let totItem = newTipString[0];
	// let tipItem = newTipString[1];

	let listItemTotPP = document.createElement("li");
	listItemTotPP.classList.add("totPP-list-item");
	listItemTotPP.innerText = receipt.totalPerPerson;

	let listItemTipPP = document.createElement("li");
	listItemTipPP.classList.add("tipPP-list-item");
	listItemTipPP.innerText = receipt.tipPerPerson;

	let iconRemove = document.createElement("i");
	iconRemove.classList.add("bi", "bi-x-circle-fill");
	listHolder.append(listItemTotPP, listItemTipPP, iconRemove);
	container.appendChild(listHolder);
	listHolder.setAttribute("data-id", receipt.id);
	listHolder.addEventListener("click", removeItem);
	// 	let tipString = JSON.stringify(tips);
	// 	let newTipString = tipString.split(',');
	// 	var totItem = newTipString[0];
	// 	var tipItem = newTipString[1];
	// let listHolder = document.createElement("ul");
	// listHolder.classList.add("list-holder", "add-item");
	// let listItemTipPP = document.createElement("li");

	// listItemTipPP.textContent = receipt.tipPerPerson;
	// listItemTipPP.classList.add("tipPP-list-item");

	// let listItemTotPP = document.createElement("li");
	// listItemTotPP.textContent = receipt.totalPerPerson;
	// listItemTotPP.classList.add("totPP-list-item");

	// let iconRemove = document.createElement("i");
	// iconRemove.classList.add("bi", "bi-x-circle-fill");


	// listHolder.append(listItemTipPP, listItemTotPP, iconRemove);
	// listContainer.appendChild(listHolder);
	// 	let listHolder = document.createElement("ul");
	// 	listHolder.classList.add("list-holder", "add-item");
	// 	let tipString = JSON.stringify(tips);
	// 	let newTipString = tipString.split(',');
	// 	var totItem = newTipString[0];
	// 	var tipItem = newTipString[1];
	// 	// let filtered = tips.filter((a, i) => i % 2 === 1);
	// 	// let newString = JSON.stringify(filtered);
	// 	// console.log(filtered);
	// 	let listItemTotPP = document.createElement("li");
	// 	listItemTotPP.classList.add("totP-list-item");
	// 	listItemTotPP.innerText = totItem;

	// 	let listItemTipPP = document.createElement("li");
	// 	listItemTipPP.classList.add("tipPP-list-item");
	// 	listItemTipPP.innerText = tipItem;

	// 	let iconRemove = document.createElement("i");
	// iconRemove.classList.add("bi", "bi-x-circle-fill");
	// 	listHolder.append(listItemTotPP, listItemTipPP, iconRemove);
	// 	listContainer.appendChild(listHolder);


}
saveDataBtn.addEventListener("click", () => {
	createList();
	updateList();
	// let listHolders = document.querySelectorAll('.list-holder');

	// if (listHolders.length > 8) {
	// 	listContainer.style.height = 'auto';
	// }
	// else {
	// 	listContainer.style.height = '650px';
	// }
});
function removeItem(e) {
	let itemToRemove = e.currentTarget;
	itemToRemove.classList.remove("add-item");
	itemToRemove.classList.add("remove-item");
	setTimeout(function () {
		itemToRemove.remove(e);
	}, 350);
	let idOfObjectToRemove = e.currentTarget.getAttribute("data-id");
	tips = tips.filter((item) => item.id !== idOfObjectToRemove);
	updateList();
}
function updateList() {
	saveList();
	container.innerHTML = "";
	tips.forEach((item) => {
		listContainer.append();
	})



	// let listHolder = document.createElement("ul");
	// listHolder.classList.add("list-holder", "add-item");
	// let newTipString = tipString.split(',');
	// var totItem = newTipString[0];
	// var tipItem = newTipString[1];

	// let listItemTotPP = document.createElement("li");
	// listItemTotPP.classList.add("totPP-list-item");
	// listItemTotPP.innerText = totItem;

	// let listItemTipPP = document.createElement("li");
	// listItemTipPP.classList.add("tipPP-list-item");
	// listItemTipPP.innerText = tipItem;

	// let iconRemove = document.createElement("i");
	// iconRemove.classList.add("bi", "bi-x-circle-fill");
	// listHolder.append(listItemTotPP, listItemTipPP, iconRemove);
	// listContainer.appendChild(listHolder);

	// let tipStrings = JSON.stringify(tips);
	// console.log(tipStrings.match(/Total/));

}
function saveList() {
	localStorage.setItem(LOCAL_STORAGE_KEY_TIPS, JSON.stringify(tips));
}
updateList();

// Remove item on click


// Remove all items
// removeDataBtn.addEventListener("click", (e) => {
// 	let listContainer = document.querySelector(".saved-tips-container");
// 	let listHolders = document.querySelectorAll('.list-holder');
// 	listHolders.forEach((listHolder) => {
// 		listHolder.classList.remove("add-item");
// 		listHolder.classList.add("remove-item");
// 		setTimeout(function () {
// 			listHolder.remove(e);
// 			listContainer.style.height = '650px';
// 		}, 350);
// 		tips = [];
// 		removeItemStyle();
// 		updateList();
// 	});
// });

// function removeItemStyle() {
// 	document.head.appendChild(document.createElement("style")).innerHTML = `
// 	.remove-item{
// 		background-color: #e74c3c;
// 		border-bottom: 1px solid #e74c3c;
// 		border-radius: 7px;
// 		transition: ease-in 0.2s;
// 	}
// 	.remove-item i{
// 		z-index: 9999;
// 		color: #fff;
// 		transition: ease-out 0.3s;
// 	}
// 	.remove-item li{
// 		color: #fff;
// 		opacity: 0.5;
// 	}
// 	`;
// }
// let list = localStorage.getItem("list") || [];
// let appRoot = document.querySelector(".saved-tips-container");

// function addReceipt() {
// 	list.push({
// 		value: coolField.value
// 	});
// 	updateReceiptList();
// }

// function removeReceipt() {

// 	updateReceiptList();
// }

// function updateReceiptList() {
// 	appRoot.innerHTML = "";
// 	list.forEach((item) => {
// 		let newDiv = document.createElement("div");
// 		div.innerHTML = item.value;
// 		appRoot.append(newDiv);
// 	})
// 	storeList();
// }

// function storeList() {
// 	localStorage.setItem("list", "list");
// }

// function reduceListToBasic(fullList) {
// 	let basicList = [];
// 	fullList.forEach((item) => {
// 		basicList.push({
// 			value: item.value
// 		});
// 	})
// 	return basicList;
// }

// function saveReducedList() {
// 	localStorage.setItem("reducedList", reduceListToBasic("list"));
// }

// function getReductList() {
// 	list = reduceListToBasic(localStorage.getItem("list"));
// }

// function startup() {
// 	updateReceiptList();
// }

// startup();