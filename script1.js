function evenOrOdd() {
  let n1 = Number(document.getElementById("t1").value);
  if (n1 % 2 == 0) {
    let n3 = "Number is Even";
    document.getElementById("p").innerHTML = n3;
  } else {
    let n3 = "Number is odd";
    document.getElementById("p").innerHTML = n3;
  }
}
