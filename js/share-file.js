window.onload = function () {
    let s1 = document.getElementById('selection-1');
    let s2 = document.getElementById('selection-2');
    let s3 = document.getElementById('selection-3');
    let l1 = document.getElementById('underline-1');
    let l2 = document.getElementById('underline-2');
    let l3 = document.getElementById('underline-3');
    let f1 = document.getElementById('file-1');
    let f2 = document.getElementById('file-2');
    let f3 = document.getElementById('file-3');

    function showFile1(){
        s1.style.display = 'flex';
        s2.style.display = 'block';
        s3.style.display = 'block';
        l1.style.display = 'block';
        l2.style.display = 'none';
        l3.style.display = 'none';
        f1.style.display = 'flex';
        f2.style.display = 'none';
        f3.style.display = 'none';
    }

    function showFile2(){
        s2.style.display = 'flex';
        s1.style.display = 'block';
        s3.style.display = 'block';
        l2.style.display = 'block';
        l1.style.display = 'none';
        l3.style.display = 'none';
        f2.style.display = 'flex';
        f1.style.display = 'none';
        f3.style.display = 'none';
    }

    function showFile3(){
        s3.style.display = 'flex';
        s2.style.display = 'block';
        s1.style.display = 'block';
        l3.style.display = 'block';
        l2.style.display = 'none';
        l1.style.display = 'none';
        f3.style.display = 'flex';
        f2.style.display = 'none';
        f1.style.display = 'none';
    }

    showFile1()

    s1.onclick = function () {
        showFile1()
    }

    s2.onclick = function () {
        showFile2()
    }

    s3.onclick = function () {
        showFile3()
    }

}