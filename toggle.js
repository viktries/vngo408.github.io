function toggle(id) {
    var i, x;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" hidden", "");
        if (x[i].id != id+'-tab') {
            x[i].className += " hidden";
        } 
    }
    x = document.getElementsByClassName("mdl-navigation__link");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" is-active", "");
        if (x[i].id == id+"-link") {
            x[i].className += " is-active";
        }
    }
    
}

