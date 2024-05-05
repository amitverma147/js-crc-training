function checkTriangle() {
  var side1 = parseFloat(document.getElementById("side1").value);
  var side2 = parseFloat(document.getElementById("side2").value);
  var side3 = parseFloat(document.getElementById("side3").value);

  if (side1 === side2 && side2 === side3) {
    document.getElementById("triangleType").textContent =
      "Equilateral Triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    document.getElementById("triangleType").textContent = "Isosceles Triangle";
  } else {
    document.getElementById("triangleType").textContent = "Scalene Triangle";
  }
}
