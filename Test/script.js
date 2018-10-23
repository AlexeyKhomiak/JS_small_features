'use strict';

var count=0;

$("button").click(function () {
 if($("#rad1").is(":checked")||$("#rad2").is(":checked")) {
        if($("#rad1").is(":checked")) {
            count+= parseInt($("#rad1").val());
            $("#rad1").prop("checked",false);
            }
        else {
            count+=parseInt($("#rad2").val());
            $("#rad2").prop("checked",false);
            }
        $(".card1").hide();
        $(".card2").show();
    }        
    if($("#rad3, #rad4").is(":checked")) {
        if($("#rad3").is(":checked")){
            count+= parseInt($("#rad3").val());
            $("#rad3").prop("checked",false);
            }
        else {
            count+= parseInt($("#rad4").val());
            $("#rad4").prop("checked",false);
            }
        $(".card2").hide();
        $(".results").show();
        $("#res").html("<h3>Result: " + count + " correct answers to 2 questions.</h3>");
    }
    
});
