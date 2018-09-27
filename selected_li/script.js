'use strict';

function selectedBook(currentBook){
    var book = document.getElementsByTagName('li');
    
     for(var i=0; i<book.length; i++){
          book[i].className = '';
     }    
     currentBook.className = 'active';
}