var h1 = document.querySelector("#Otp");
var btn = document.querySelector("button");

btn.addEventListener("click", function () {
  var otp = Math.floor(Math.random() * 100); 
  
  h1.innerHTML = "Your OTP is :" + otp; 
  h1.style
});
