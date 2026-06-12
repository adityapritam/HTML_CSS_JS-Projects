let havetext=true;
document.addEventListener("keydown",function(event){
    let key=event.key;
    if ("0123456789".includes(key)&&havetext) {
        clear();
        havetext=false;
    }    
    switch(key){//controls the keyboard
        case "0":
            write(0);
            break;
        case "1":
            write(1);
            break;
        case "2":
            write(2);
            break;
        case "3":
            write(3);
            break;
        case "4":
            write(4);
            break;
        case "5":
            write(5);
            break;
        case "6":
            write(6);
            break;
        case "7":
            write(7);
            break;
        case "8":
            write(8);
            break;
        case "9":
            write(9);
            break;
        case "Enter":
            convert.click();
            break;
        case "Backspace":
            input.textContent = input.textContent.slice(0, -1);//Provides the use of backspace, 
            //slice(0,-1) means Start from index 0 and take everything except the last character.
            break;
        case "Escape":
            changetext();
            break;
    }
});
let input=document.getElementById("holder");
function write(element){
    input.innerHTML=`${input.textContent}`+element;
    input.scrollLeft = input.scrollWidth;
}
function clear(){
    input.innerHTML="";
}
function changetext(){
    input.innerHTML=`<span style="color: rgb(169, 169, 169);">Enter through keyboard</span>`;
    havetext=true;
}
let amount;
let from;
let to;
let result=document.getElementById("holder2");

let convert=document.getElementById("convert");
    convert.addEventListener("click",function(){
    let screen=document.getElementById("holder");
    amount=`${screen.textContent}`;
    from = document.querySelector(".currency").value;
    to = document.querySelectorAll(".currency")[1].value;

    if (isNaN(amount)) {
        result.innerHTML="NaN, Not a Number";
        throw new Error("Invalid amount");//throws an error
    }

    if (from === to) {//if both in and out currency are same return the input value only
    result.innerText = amount;
    return;
    }

    fetch(`https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}&to=${to}`)//usage of Api
    .then(res => res.json())
    .then(data => {
        console.log(data);
        result.innerText = data.rates[to];
    });
});
