var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var num3 = document.querySelector("#num3");
var btn = document.querySelector("button");
var ans = document.querySelector("h3");
btn.addEventListener("click", function () {
  var n1 = parseFloat(num1.value);
  var n2 = parseFloat(num2.value);
  var n3 = parseFloat(num3.value);
  if (n1 >= n2 && n1 >= n3) {
    ans.textContent = "The largest number is: " + n1;
  } else if (n2 >= n1 && n2 >= n3) {
    ans.textContent = "The largest number is: " + n2;
  } else {
    ans.textContent = "The largest number is: " + n3;
  }
});
