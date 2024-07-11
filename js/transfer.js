window.onload = function () {
    let b1 = document.getElementById('button-1');
    let b2 = document.getElementById('button-2');
    let b3 = document.getElementById('button-3');
    let box1 = document.getElementById('box-1');
    let box2 = document.getElementById('box-2');
    let box3 = document.getElementById('box-3');
    let f1 = document.getElementById('footer-1');
    let f2 = document.getElementById('footer-2');
    let t1 = document.getElementById('title-1');
    let t2 = document.getElementById('title-2');

    function switch_to_1(){
        t1.style.display = 'inline';
        t2.style.display = 'none';
        b1.style.backgroundColor = 'white';
        b1.style.color = 'black';
        b1.style.fontSize = '3.6vw';
        b2.style.backgroundColor = '#f8f9fd';
        b2.style.color = '#a1a7bc';
        b2.style.fontSize = '3.2vw';
        b3.style.backgroundColor = '#f8f9fd';
        b3.style.color = '#a1a7bc';
        b3.style.fontSize = '3.2vw';
        box1.style.display = 'block';
        box2.style.display = 'none';
        box3.style.display = 'none';
        f1.style.display = 'flex';
        f2.style.display = 'none';
    }

    function switch_to_2(){
        t2.style.display = 'inline';
        t1.style.display = 'none';
        b2.style.backgroundColor = 'white';
        b2.style.color = 'black';
        b2.style.fontSize = '3.6vw';
        b1.style.backgroundColor = '#f8f9fd';
        b1.style.color = '#a1a7bc';
        b1.style.fontSize = '3.2vw';
        b3.style.backgroundColor = '#f8f9fd';
        b3.style.color = '#a1a7bc';
        b3.style.fontSize = '3.2vw';
        box2.style.display = 'block';
        box1.style.display = 'none';
        box3.style.display = 'none';
        f2.style.display = 'flex';
        f1.style.display = 'none';
    }

    function switch_to_3(){
        t2.style.display = 'inline';
        t1.style.display = 'none';
        b3.style.backgroundColor = 'white';
        b3.style.color = 'black';
        b3.style.fontSize = '3.6vw';
        b1.style.backgroundColor = '#f8f9fd';
        b1.style.color = '#a1a7bc';
        b1.style.fontSize = '3.2vw';
        b2.style.backgroundColor = '#f8f9fd';
        b2.style.color = '#a1a7bc';
        b2.style.fontSize = '3.2vw';
        box3.style.display = 'flex';
        box1.style.display = 'none';
        box2.style.display = 'none';
        f2.style.display = 'flex';
        f1.style.display = 'none';
    }

    switch_to_1();

    b1.onclick = function (){
        switch_to_1();
    }

    b2.onclick = function (){
        switch_to_2();
    }
    b3.onclick = function (){
        switch_to_3();
    }

}