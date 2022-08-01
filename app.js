const h=document.querySelector(".hour");
const m=document.querySelector(".minute");
const s=document.querySelector(".second");

const current_time=document.querySelector(".time");
const times=document.querySelector(".times");
const start=document.querySelector(".stop-resume");
const reset=document.querySelector(".reset");
const add=document.querySelector(".add");

var hour=0;
var minute=0;
var second=0;
function sec(){
    second++;
    if(second>59){
        second=0;
        minute++;
    }
    if(minute>59){
        minute=0;
        hour++;
    }
}

function update_time(){
    if(second<10){
        s.innerHTML="0"+second;
    }
    else{
        s.innerHTML=second;
    }
    if(minute<10){
        m.innerHTML="0"+minute;
    }
    else{
        m.innerHTML=minute;
    }
    if(hour<10){
        h.innerHTML="0"+hour;
    }
    else{
        h.innerHTML=hour;
    }
}



start.addEventListener("click",function(){
    zaman=setInterval(sec,1000);
    setInterval(update_time,1000);
});
reset.addEventListener("click",function(){
    hour=0;
    minute=0;
    second=0;
    clearInterval(zaman);
    times.innerHTML="";
});
add.addEventListener("click",function(){
    let div=document.createElement("div");
    div.classList.add("added-time");
    div.innerHTML=current_time.innerHTML;
    times.appendChild(div);
})