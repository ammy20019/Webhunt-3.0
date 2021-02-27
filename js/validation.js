function checkAns() {
  var x;

  x = document.getElementById("answerBox").value;
  if (x > 10) {
    alert("Redirect next");
  } else {
    alert("Oops! Try again Captain!");
  }
}

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }