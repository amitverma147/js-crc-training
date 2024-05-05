var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var dayNumber = parseInt(document.getElementById("dayNumber").value);
  var dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }

  document.getElementById("dayName").innerText = "The day name is: " + dayName;
});
