

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function checkAns() {
  var x;

  x = document.getElementById("answerBox").value;
  if (x > 10) {
    window.location.href = "challenge1.html";
  } else {
    modal.style.display = "block";
    // alert("Oops! Try again Captain!");
  }
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
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


// When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

