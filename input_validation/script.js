'use strict';

var regex = /[0-9]/;

document.addEventListener('keydown', (event) => {
if(regex.test(event.key)) event.returnValue = false;    
});

