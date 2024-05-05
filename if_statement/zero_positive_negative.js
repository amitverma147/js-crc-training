

function checkNumber() {
  
  var input = document.getElementById("numberInput").value;

  var number = parseFloat(input);

  if (!isNaN(number)) {
  
    if (number === 0) {
      document.getElementById("result").innerHTML = "The number is zero.";
    } else if (number > 0) {
      document.getElementById("result").innerHTML = "The number is positive.";
    } else {
      document.getElementById("result").innerHTML = "The number is negative.";
    }
  } else {
    
    document.getElementById("result").innerHTML =
      "Please enter a valid floating-point number.";
  }
}
