'use strict';

function ChangeTooltip(){
            
           var elem = document.getElementsByTagName("span");
            
           var rect = elem[0].getBoundingClientRect();
           
            if (parseInt(rect.top) > 50)
               elem[0].className = "tooltiptext";         
            else
                elem[0].className = "tooltiptextUnder";           
}