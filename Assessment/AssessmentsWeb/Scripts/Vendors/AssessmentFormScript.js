﻿
    function toggle_div_fun(id) {
        var divelement = document.getElementById(id);
        
        if (divelement.style.display == 'none')
            divelement.style.display = 'block';
        else
            divelement.style.display = 'none';      
    }

function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else { 
        document.selection.empty();
    }
}

