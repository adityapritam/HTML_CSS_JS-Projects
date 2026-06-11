let pwd=document.querySelector("#text");
let set="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
let s="";

let submit=document.getElementById("submit");
submit.addEventListener("click",function(){
    for(let i=1;i<=12;i++){
    s += set[Math.floor(Math.random() * set.length)];
    }
    pwd.textContent=`${s}`;
    s="";
});

let copy=document.getElementById("copy");
copy.addEventListener("click",function(){
    navigator.clipboard.writeText(pwd.textContent);
    alert("Password copied!");
});
