/*

Changing-Text-With-Button - Changing a set piece of text (<p>) when a button is clicked (<button>) using Event Listeners.

*/

/*

Create a <button> in HTML, and a <p>

*/

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", function() {
  paragraph.textContent = "Someone clicked the button";
});
