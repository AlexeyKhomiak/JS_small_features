'use strict';

var textStyle;

$("#btn").click(function () {
    if($("#rad1").is(":checked"))
        $("#result").css({"text-align": "left"});
    if($("#rad2").is(":checked"))
        $("#result").css({"text-align": "right"});
    if($("#rad3").is(":checked"))
        $("#result").css({"text-align": "justify"});
    if($("#check1").is(":checked"))
        $("#result").css({"font-weight": "bold"});
    else
        $("#result").css({"font-weight": ""});
    if($("#check2").is(":checked"))
        $("#result").css({"text-decoration": "underline"});
    else
        $("#result").css({"text-decoration": ""});
    if($("#check3").is(":checked"))
        $("#result").css({"font-style": "italic"});
    else
        $("#result").css({"font-style": ""});
    
    $("#result").html($("#text").val());  
    
});