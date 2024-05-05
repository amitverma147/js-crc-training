var num = document.querySelector("input");
var h2 = document.querySelector("h2");
var btn = document.querySelector("button");

num.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents form submission or any other default action
    generateTable();
  }
});

btn.addEventListener("click", generateTable);

function generateTable() {
  var number = num.value;
  let ans = ``;
  for (var i = 1; i <= 10; i++) {
    ans = ans + `${number} X ${i} = ${number * i} <br>`;
  }
  h2.innerHTML = ans;
}
