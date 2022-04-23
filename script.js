let hr = document.querySelector('#hr');
let min = document.querySelector('#min');
let s = document.querySelector('#s');

setInterval (() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.tranform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.tranform = `rotateZ(${mm}deg)`;
    s.style.tranform = `rotateZ(${ss}deg)`;
})
