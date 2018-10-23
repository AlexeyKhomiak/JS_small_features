'use strict';

$("#btnSend").click(function () {
    var date = new Date();
    var currentDate = date.toLocaleTimeString() + ' ' + date.toLocaleDateString();
    
    var text = "<div class='messageHead'><div>" + $("#txtName").val() + "</div><div>" + currentDate + "</div></div><div class='messageText'>" + $("#txtMessage").val() + "</div>";
    
    $(".message").append(text);
    
    $("#txtMessage").val('');
});