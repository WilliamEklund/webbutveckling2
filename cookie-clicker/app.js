;



let clicked = 50;
let clickPwr = 1;
let inventory = [];

// span
const clickcount = document.querySelector(".clickcount");
// click me button
const click = document.querySelector(".click");
// Buy! button
const broomBtn = document.querySelector(".broom-btn");
// create list li
const inventList = document.querySelector(".inventory");

click.addEventListener("click", () => {
  clicked += clickPwr;
  updateInventory();
});

broomBtn.addEventListener("click", () => {
  let hasBroom = false;
  inventory.forEach((item) => {
    if (item === "Broom") {
      hasBroom = true;
    }
  });
  if (clicked >= 50 && !hasBroom) {
    inventory.push("Broom");
    clicked -= 50;
    clickPwr *= 2;
    broomBtn.classList.add("out-of-stock");
    broomBtn.disabled = true;
    updateInventory();
  }
});

function updateInventory() {
  clickcount.innerHTML = clicked;
  inventList.innerHTML = "";
  inventory.forEach((item) => {
    newItem = document.createElement("li");
    newItem.innerHTML = item;
    inventory.append(newItem);
  })
}


// add.addEventListener("click", () => {
// // clicked = clicked + 1;
// // clicked += 1;
// clicked++;
// console.log(clickcount);
// clickcount.innerHTML = clicked;
// });
// remove.addEventListener("click", () => {
//   clicked--;
//   console.log(clickcount);
//   clickcount.innerHTML = clicked;
//   });














