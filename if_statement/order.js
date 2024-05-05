var btn=document.querySelector('button');
btn.addEventListener('click',function(){
     var num1 = parseFloat(document.getElementById("num1").value);
     var num2 = parseFloat(document.getElementById("num2").value);
     var num3 = parseFloat(document.getElementById("num3").value);

     if (num1 < num2 && num2 < num3) {
       document.getElementById("result").innerText = "Increasing";
     } else if (num1 > num2 && num2 > num3) {
       document.getElementById("result").innerText = "Decreasing";
     } else {
       document.getElementById("result").innerText =
         "Neither increasing nor decreasing order";
     }
})
