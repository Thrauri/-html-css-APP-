window.onload = function () {
    let menu_button = document.getElementById("menu-button");
    let options = document.getElementById("options");

    options.style.display = 'none'

    menu_button.onclick = function (e) {
        e.stopPropagation();
        if(options.style.display === 'none'){
            options.style.display = 'block';
        }else {
            options.style.display = 'none';
        }
    }

    document.documentElement.onclick = function () {
        if(options.style.display === 'block'){
            options.style.display = 'none';
        }
    }
}