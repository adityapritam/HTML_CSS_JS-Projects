let pwd=document.querySelector("#text");
let set="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
let s="";

let confirm=document.querySelector(".confirm");
let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    for(let i=1;i<=12;i++){
    s += set[Math.floor(Math.random() * set.length)];
    }
    pwd.textContent=`${s}`;
    s="";
    confirm.style.animation="slideout 1s forwards";
});

let copy=document.getElementById("copy");
copy.addEventListener("click",function(){
    if((pwd.textContent)==""){
        return false;
    }
    navigator.clipboard.writeText(pwd.textContent);
    confirm.style.visibility="visible";
    confirm.style.animation="slidein 0.39s forwards";
    setTimeout(function(){
    confirm.style.animation="slideout 1s forwards";
    },2*1000)
});


let close=document.getElementById("cross");
close.addEventListener("click",function(){
    confirm.style.animation="slideout 1s forwards";
});