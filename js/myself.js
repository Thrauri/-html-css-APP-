window.onload = function () {

    let h1 = document.getElementById('header-1')
    let h2 = document.getElementById('header-2')
    let user = document.getElementById('move-user-icon');
    let t1 = document.getElementById('text-1');
    let t2 = document.getElementById('text-2');

    t1.style.display = 'block';
    t2.style.display = 'none';
    user.style.top = '12vw';
    user.style.left = '6vw';
    user.style.width = '12vw';
    user.style.height = '12vw';
    h1.style.opacity = '1';
    h2.style.opacity = '0';

    document.onscroll = function (){
        let s1 = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;
        let scroll = s1 === 0? s2:s1;

        let width = document.documentElement.clientWidth;

        if(scroll<=0.74*width){
            h1.style.opacity = '' + (1-scroll/(0.74*width));
            h2.style.opacity = '' + (scroll/(0.74*width));
        }

        if(scroll<=0.32*width){
            user.style.width =(12-(6*(scroll/(0.32*width))))+'vw';
            user.style.height =(12-(6*(scroll/(0.32*width))))+'vw';
            user.style.top = (12-(9*(scroll/(0.32*width))))+'vw';
            user.style.left = (6-(2*(scroll/(0.32*width))))+'vw';
        }

    }

    let i = 0;
    setInterval(function (){
        i = (i+1)%2
        if(i===0){
            t1.style.display = 'block';
            t2.style.display = 'none';
        }else {
            t1.style.display = 'none';
            t2.style.display = 'block';
        }
    }, 6000)
}