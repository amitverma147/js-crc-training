var inp = document.querySelector("input");
var btn = document.querySelector("button");
var reverse = document.querySelector("#reverse");

btn.addEventListener("click", function () {
  var data = Number(inp.value);
  var rev=0;
  if (!isNaN(data)) {
    while (data > 0) {
      var r = data % 10;
      rev=(rev*10)+r;
      data = Math.floor(data / 10);
    }
    reverse.innerHTML = "Reverse of the Number: " + rev;
  } else {
    sum.innerHTML = "Please enter a valid number.";
    mult.innerHTML = "";
  }
});
