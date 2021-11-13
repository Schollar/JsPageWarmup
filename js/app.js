var image1 = document.getElementById("image1");
var link = document.getElementById("link");
var wording = document.getElementById("wording");


wording.innerHTML = "I've been injected!";
link.style.color = "green";
image1.style.display = "none"

var headings = document.getElementsByClassName("heading");

for (var i = 0; i < headings.length; i++) {
    headings[i].innerText = "Haha I am random!"
}