var inp = document.querySelector("input");
var btn = document.querySelector("button");
var ans = document.querySelector("h3");
var value;
btn.addEventListener("click", function () {
  value = parseInt(inp.value);
  if (value % 2 === 0) {
    ans.textContent = "Number is Even";
  } else {
    ans.textContent = "Number is Odd";
  }
});
