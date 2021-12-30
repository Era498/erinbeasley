// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var buttonCol = document.getElementsByTagName("button");
    for (var i = buttonCol.length - 1; i >= 0; i--) {
        buttonCol[i].classList.toggle("collapsible-dark");
        buttonCol[i].classList.toggle("collapsible");
    }
    var pic = document.getElementById("profpic");
}
var coll = document.getElementsByClassName("collapsible");
if(coll.length < 2) {
    coll = document.getElementsByClassName("collapsible-dark");
}
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}