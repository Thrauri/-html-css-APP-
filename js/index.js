window.onload = function (){
    let b1 = document.getElementById('show-button');
    let b2 = document.getElementById('hide-button');
    let r1 = document.getElementById('recent-box-1');
    let r2 = document.getElementById('recent-box-2');

    b1.onclick = function (){
        b1.style.display = 'none';
        b2.style.display = 'block';
        r1.style.display = 'none';
        r2.style.display = 'flex';
    }

    b2.onclick = function (){
        b2.style.display = 'none';
        b1.style.display = 'block';
        r2.style.display = 'none';
        r1.style.display = 'block';
    }
}