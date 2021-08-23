let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btnE = document.getElementById("btn-e");
let header = document.getElementById("header");
const list = document.querySelectorAll(".list");


function activelink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active')
}

list.forEach((item) =>
item.addEventListener('click', activelink));

const move =()=>{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';    
    moon.style.top = value * 1.05 + 'px';    
    mountains_behind.style.top = value * 0.3 + 'px';    
    mountains_front.style.top = value * 0 + 'px';    
    text.style.marginRight = value * 4 + 'px';    
    text.style.marginTop = value * 1.3 + 'px';
    btnE.style.marginTop = value * 1.3 + 'px';
    header.style.top = value * 0.3 + 'px';   
       
}

function takeDate(){
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById("year").innerHTML = `${year}`
}

function updateTime(k){
    if(k < 10) {
        return "0" + k;
    }
    else{
        return k;
    }
}
setInterval(takeDate, 1000);
window.addEventListener("scroll",move);