let key0=document.getElementById("zero");
let key1=document.getElementById("one");
let key2=document.getElementById("two");
let key3=document.getElementById("three");
let key4=document.getElementById("four");
let key5=document.getElementById("five");
let key6=document.getElementById("six");
let key7=document.getElementById("seven");
let key8=document.getElementById("eight");
let key9=document.getElementById("nine");

let screen=document.getElementById("holder");

let clear=document.getElementById("C");

let symbol=0;

let equals=document.getElementById("equals");

function display(a){
    screen.innerHTML=`${screen.textContent}`+a;//display the text present+ the new text a.
}

key0.addEventListener("click",function(){//as key 0 is clicked display zero.
    display(0);
});

key1.addEventListener("click",function(){
    display(1);;
});

key2.addEventListener("click",function(){
    display(2);
});

key3.addEventListener("click",function(){
    display(3);
});

key4.addEventListener("click",function(){
    display(4);
});

key5.addEventListener("click",function(){
    display(5);
});

key6.addEventListener("click",function(){
    display(6);
});

key7.addEventListener("click",function(){
    display(7);
});

key8.addEventListener("click",function(){
    display(8);
});

key9.addEventListener("click",function(){
    display(9);
});

clear.addEventListener("click",function(){
    screen.innerHTML="";//clear the screen by displaying ""
});

let add=document.getElementById("plus");
let subtract=document.getElementById("minus");
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");

//function to check whether there is error in the syntax, basically to avoid the user to enter anything like multiple'.','+','-','*' etc together.
function repeat(e){
    if(symbol<=0){
        symbol=1;
        display(e);
    }
    else{
        alert("Bad Command");
        return false;
    }
}
add.addEventListener("click",function(){
    repeat("+");
});

subtract.addEventListener("click",function(){
    repeat("-");
});

multiply.addEventListener("click",function(){
    repeat("*");
});

divide.addEventListener("click",function(){
    repeat("/");
});

let decimal=document.getElementById("point");
decimal.addEventListener("click",function(){
    repeat(".");
});

equals.addEventListener("click",function(){
    try {
        let result = eval(screen.textContent);//eval is used to evaluate the expression inside the screen.
        screen.textContent = result;
    }
    catch {
        screen.textContent = "Error";
    }
});

//To make the calculator accessible using the keyboard.
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if ("0123456789".includes(key)) {
        symbol=0;
    }    

    switch(key) {
        case "0":
            key0.click();
            break;

        case "1":
            key1.click();
            break;

        case "2":
            key2.click();
            break;

        case "3":
            key3.click();
            break;

        case "4":
            key4.click();
            break;

        case "5":
            key5.click();
            break;

        case "6":
            key6.click();
            break;

        case "7":
            key7.click();
            break;

        case "8":
            key8.click();
            break;

        case "9":
            key9.click();
            break;

        case "+":
            add.click();
            break;

        case "-":
            subtract.click();
            break;

        case "*":
            multiply.click();
            break;

        case "/":
            divide.click();
            break;

        case ".":
            decimal.click();
            break;

        case "Enter":
            equals.click();
            break;

        case "=":
            equals.click();
            break;

        case "Backspace":
            clear.click();
            break;
        case "Escape":
            clear.click();
            break;
    }
});