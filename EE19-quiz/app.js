let form = document.querySelector("form");

let resultBox = document.querySelector(".result-box");
let resultHeading = document.querySelector(".result-box h2");
let resultText = document.querySelector(".result-box p");
let tryAgain = document.querySelector(".result-box button");


form.addEventListener("submit", handleForm);
tryAgain.addEventListener("click", resetForm);

function handleForm(event) {
  let totalPoints = 0;
event.preventDefault();
let answers = document.querySelectorAll("input");
answers.forEach((answer) =>{
  if (answer.checked){
totalPoints += Number.parseInt(answer.getAttribute("data-points"));
  }
});
console.log(totalPoints);

resultBox.classList.toggle("hidden");
form.classList.toggle("hidden");

if (totalPoints === 3) {
  resultHeading.innerHTML = "Perfect Score!";
}
else if (totalPoints === 2){
  resultHeading.innerHTML = "Almost!";
}
else if (totalPoints === 1){
  resultHeading.innerHTML = "No";
}
resultText.innerHTML = `you got ${totalPoints}/3 points correct!`;
}

function resetForm(){
  resultBox.classList.toggle("hidden");
  form.classList.toggle("hidden");
  form.reset();
}

