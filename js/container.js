var container = document.getElementById("Pics");
var arrayHTML = "<ul>";

for (var i = 0; i < myArray.length; i++) {
  arrayHTML += "<li>" + myArray[i] + "</li>";
}

arrayHTML += "</ul>";

container.innerHTML = arrayHTML;
