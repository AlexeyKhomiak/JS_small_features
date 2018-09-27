'use strict';

var btn = document.getElementById("btnOpenModal");
var modal = document.getElementById("modal");
var btnCloseModal = document.getElementById("btnCloseModal");

btn.onclick = function() {
    modal.style.display = "block";
}

btnCloseModal.onclick = function() {
    modal.style.display = "none";
}
