let allReceipts = [];

// select currencies
const crncy_btn = document.querySelector(".crncy-btn");
const crncy_list = document.querySelector(".crncy-list");
const swe_crncy = document.querySelector(".swe-crncy");
const us_crncy = document.querySelector(".us-crncy");
const uk_crncy = document.querySelector(".uk-crncy");
const jp_crncy = document.querySelector(".jp-crncy");
const crncy_spans = document.querySelectorAll("span.crncy");
const crncy_span_first = document.querySelector("span:first-child");
// const crncy_span_bill = document.querySelectorAll(".input-box .crncy");
// const tipPP_crncy = document.querySelector(".tip-pp-crncy");
// const totPP_crncy = document.querySelector(".total-pp-crncy");



// switch currencies
crncy_btn.addEventListener("click", () => {
	crncy_list.classList.toggle("hide");

	if (crncy_list.classList.contains("hide") === false) {
		crncy_btn.classList.add("active");
	} else {
		crncy_list.classList.remove("active");
	}
});

// US
us_crncy.addEventListener("click", () => {
	us_crncy.classList.add("active-crncy");
	swe_crncy.classList.remove("active-crncy");
	uk_crncy.classList.remove("active-crncy");
	jp_crncy.classList.remove("active-crncy");
	crncy_spans.forEach((crncy_span) => {
		if (crncy_span.classList.contains("crncy")) {

			crncy_span_first.innerHTML = "$";
			let usCrncy = crncy_span.innerHTML.replace(/[kr£¥]/g, "$");
				crncy_span.innerHTML = usCrncy;
		}
		
	});
});


	// SWE
	swe_crncy.addEventListener("click", () => {

		crncy_spans.forEach((crncy_span) => {
			swe_crncy.classList.add("active-crncy");
			us_crncy.classList.remove("active-crncy");
			uk_crncy.classList.remove("active-crncy");
			jp_crncy.classList.remove("active-crncy");

			if (crncy_span.classList.contains("crncy")) {
				crncy_span_first.innerHTML = "kr";
			let sweCrncy = crncy_span.innerHTML.replace(/[$£¥]/g, '');
				crncy_span.innerHTML = sweCrncy.concat("kr");
			}
		});
	
	});


// UK
uk_crncy.addEventListener("click", () => {
	crncy_spans.forEach((crncy_span) => {
		uk_crncy.classList.add("active-crncy");
		swe_crncy.classList.remove("active-crncy");
		us_crncy.classList.remove("active-crncy");
		jp_crncy.classList.remove("active-crncy");
		if (crncy_span.classList.contains("crncy")) {
			crncy_span_first.innerHTML = "£";
			let ukCrncy = crncy_span.innerHTML.replace(/[$kr¥]/g, '£');
			crncy_span.innerHTML = ukCrncy;
		}
	});
});
// Japan
jp_crncy.addEventListener("click", () => {
	crncy_spans.forEach((crncy_span) => {
		jp_crncy.classList.add("active-crncy");
		swe_crncy.classList.remove("active-crncy");
		us_crncy.classList.remove("active-crncy");
		uk_crncy.classList.remove("active-crncy");
		if (crncy_span.classList.contains("crncy")) {
			crncy_span_first.innerHTML = "¥";
			let jpCrncy = crncy_span.innerHTML.replace(/[$kr£]/g, '¥');
			crncy_span.innerHTML = jpCrncy;
			length.toFixed(2);
		}
	});
});


// get input elements
const sliders = document.querySelectorAll('input[type="range"]');
const billInput = document.querySelector("#bill");
sliders.forEach(function (slider) {
	slider.addEventListener("input", calcTip);
});
billInput.addEventListener("change", calcTip);

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

	// Display value
	// US
	if (us_crncy.classList.contains("active-crncy")) {
		document.querySelector("#tip-amount").textContent = `\$${totTip}`;
		document.querySelector("#total-amount").textContent = `\$${tot}`;
		document.querySelector("#tip-percent").textContent = `${tipPercent}\%`;
		document.querySelector("#split-num").textContent = NoOfPpl;
		document.querySelector("#tip-per-person").textContent = `\$${tipPP}`;
		document.querySelector("#total-per-person").textContent = `\$${totPP}`;
	}
	// SWE
	if (swe_crncy.classList.contains("active-crncy")) {
		document.querySelector("#tip-amount").textContent = `${totTip}`;

		document.querySelector("#total-amount").textContent = `${tot}`;

		document.querySelector("#tip-percent").textContent = `${tipPercent}\%`;

		document.querySelector("#split-num").textContent = NoOfPpl;

		document.querySelector("#tip-per-person").textContent = `${tipPP}`;

		document.querySelector("#total-per-person").textContent = `${totPP}`;
	}
	// UK
	if (uk_crncy.classList.contains("active-crncy")) {
		document.querySelector("#tip-amount").textContent = `\£${totTip}`;

		document.querySelector("#total-amount").textContent = `\£${tot}`;

		document.querySelector("#tip-percent").textContent = `${tipPercent}\%`;

		document.querySelector("#split-num").textContent = NoOfPpl;

		document.querySelector("#tip-per-person").textContent = `\£${tipPP}`;

		document.querySelector("#total-per-person").textContent = `\£${totPP}`;
	}
	// Japan
	if (jp_crncy.classList.contains("active-crncy")) {
		document.querySelector("#tip-amount").textContent = `\¥${totTip}`;

		document.querySelector("#total-amount").textContent = `\¥${tot}`;

		document.querySelector("#tip-percent").textContent = `${tipPercent}\%`;

		document.querySelector("#split-num").textContent = NoOfPpl;

		document.querySelector("#tip-per-person").textContent = `\¥${tipPP}`;

		document.querySelector("#total-per-person").textContent = `\¥${totPP}`;
	}
	// Store data history
	// const LOCAL_STORAGE_KEY_TODOS = "app.getData";

	// let getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];
}
calcTip();

// Save data
let saveDataBtn = document.querySelector(".save-data");
removeDataBtn = document.querySelector(".remove-data");
saveDataBtn.addEventListener("click", (e) => {
	let tipPerPerson = document.querySelector("#tip-per-person").innerText;
	tipPerPerson = tipPerPerson.substring(1);

	let totalPerPerson = document.querySelector("#total-per-person").innerText;
	totalPerPerson = totalPerPerson.substring(1);

	let receipt = {
		tipPerPerson: tipPerPerson,
		totalPerPerson: totalPerPerson,
	};
	let list = document.querySelector(".save-data-list");
	let listItems = document.createElement("li");
	listItems.innerText = tipPerPerson + totalPerPerson;
	allReceipts.push(receipt);
	console.log(allReceipts);
	list.append(listItems);

});

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
