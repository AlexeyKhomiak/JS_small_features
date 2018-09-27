'use strict';

var circle = document.getElementsByClassName('circle');
var button = document.getElementById('btn');
circle[0].style.backgroundColor = 'red';

button.onclick = function () {
    
    if (circle[0].style.backgroundColor == 'red') {
            circle[1].style.backgroundColor = 'orange';
            circle[0].style.backgroundColor = 'lightgray';
        }
    
    else if (circle[1].style.backgroundColor == 'orange') {
            circle[2].style.backgroundColor = 'green';
            circle[1].style.backgroundColor = 'lightgray';
        }
    
     else if (circle[2].style.backgroundColor == 'green') {
            circle[0].style.backgroundColor = 'red';
            circle[2].style.backgroundColor = 'lightgray';
        }
}