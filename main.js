"use strict";
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM is loaded");
    var inputField = document.getElementById('inputField');
    var submitButton = document.getElementById('submitButton');
    var outputField = document.getElementById('outputField');
    submitButton.addEventListener('click', function () {
        var userInput = inputField.value;
        var output = parseLtGt(userInput);
        outputField.textContent = "The parsed string is: ".concat(output);
    });
});
function parseLtGt(userInput) {
    return userInput
        .replace("&lt;", "<")
        .replace("&gt;", ">");
}
