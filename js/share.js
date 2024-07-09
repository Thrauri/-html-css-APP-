window.onload = function () {
    let b1 = document.getElementById('more-button');
    let b2 = document.getElementById('hide-button');
    let m2 = document.getElementById('menu-bar-2');

    function show(){
        b1.style.display = 'none';
        b2.style.display = 'flex';
        m2.style.display = 'flex';
    }

    function hide(){
        b1.style.display = 'flex';
        b2.style.display = 'none';
        m2.style.display = 'none';
    }

    hide();

    b1.onclick = function () {
        show();
    }

    b2.onclick = function () {
        hide();
    }
}