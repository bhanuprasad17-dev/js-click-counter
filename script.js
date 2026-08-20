let count = 0;

const countDisplay = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;
});