var inp = document.querySelector("input");
var btn = document.querySelector("button");
var sum = document.querySelector("#sum");
var mult = document.querySelector("#Mul");
btn.addEventListener("click", function () {
  var data = Number(inp.value);
  var sum1 = 0;
  var mul1 = 1;
  if (!isNaN(data)) {
    while (data > 0) {
      var r = data % 10;
      sum1 = sum1 + r;
      mul1 = mul1 * r;
      data = Math.floor(data / 10);
    }
    sum.innerHTML = "SUM OF THE DIGITS: " + sum1;
    mult.innerHTML = "MULTIPLICATION OF THE DIGITS: " + mul1;
  } else {
    sum.innerHTML = "Please enter a valid number.";
    mult.innerHTML = "";
  }
});
