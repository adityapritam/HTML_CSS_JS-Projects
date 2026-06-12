let c=document.getElementById("C");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let zero=document.getElementById("zero");
let text=document.getElementById("holder");
let point=document.getElementById("point");
let plus=document.getElementById("plus");
let minus=document.getElementById("minus");
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");
let equals=document.getElementById("equals");

let num=0;
let decimal=false;//tells if point is clicked or not
let count=1;
let min=false;
let answer=0;
let clearscreen=false;
let stc=1;//startcount
c.addEventListener("click",function(){  //Clear the screen of calculator
    text.innerHTML="";
    num=0;
    answer=0;
    stc=1;
});

    one.addEventListener("click",function(){//what happens when one is clicked
        if(clearscreen){    //after every calculation if a number is directly pressed the screen should be cleared
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}1`;
        if(decimal==false)
        num=num*10+1;
        else if(decimal==true){
            num=num+(1/(Math.pow(10,count)));
            count++;
        }
    });
    two.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}2`;
        if(decimal==false)
        num=num*10+2;
        else if(decimal==true){
            num=num+(2/(Math.pow(10,count)));
            count++;
        }
    });
    three.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}3`;
        if(decimal==false)
        num=num*10+3;
        else if(decimal==true){
            num=num+(3/(Math.pow(10,count)));
            count++;
        }
    });
    four.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}4`;
        if(decimal==false)
        num=num*10+4;
        else if(decimal==true){
            num=num+(4/(Math.pow(10,count)));
            count++;
        }
    });
    five.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}5`;
        if(decimal==false)
        num=num*10+5;
        else if(decimal==true){
            num=num+(5/(Math.pow(10,count)));
            count++;
        }
    });
    six.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}6`;
        if(decimal==false)
        num=num*10+6;
        else if(decimal==true){
            num=num+(6/(Math.pow(10,count)));
            count++;
        }
    });
    seven.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}7`;
        if(decimal==false)
        num=num*10+7;
        else if(decimal==true){
            num=num+(7/(Math.pow(10,count)));
            count++;
        }
        
    });
    eight.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}8`;
        if(decimal==false)
        num=num*10+8;
        else if(decimal==true){
            num=num+(8/(Math.pow(10,count)));
            count++;
        }
    });
    nine.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}9`;
        if(decimal==false)
        num=num*10+9;
        else if(decimal==true){
            num=num+(9/(Math.pow(10,count)));
            count++;
        }
    });
    zero.addEventListener("click",function(){
                if(clearscreen){
            text.innerHTML="";
            num=0;
            answer=0;
            clearscreen=false;
        }
        text.innerHTML=`${text.textContent}0`;
        if(decimal==false)
        num=num*10+0;
        else if(decimal==true){
            num=num+(0/(Math.pow(10,count)));
            count++;
        }
    });
    point.addEventListener("click",function(){//addition of decimal point
        if(decimal){
            alert("Bad Command");
            return false;
        }
        text.innerHTML=`${text.textContent}.`;
        decimal=true;
        num=num*1.0;
        console.log(decimal);
    });

let add=false;
let subtract=false;
let star=false;
let slash=false;

plus.addEventListener("click",function(){
    text.innerHTML=`${text.textContent}+`;
    clearscreen=false;
    if(stc==1&&min==true){
        answer-=num;
        min=false;
        stc++;
    }
    else{
    answer+=num;// why to add num here ? and why not here  add here because it needed to be added no.
    }
    num=0;
    add=true;
    decimal=false;
});
minus.addEventListener("click",function(){
    text.innerHTML=`${text.textContent}-`;
    clearscreen=false;
    if(stc==1){
        min=true;
    }
    num=0;
    subtract=true;
    decimal=false;
});
multiply.addEventListener("click",function(){
    text.innerHTML=`${text.textContent}*`;
        clearscreen=false;
    star=true;
    decimal=false;
});
divide.addEventListener("click",function(){
    text.innerHTML=`${text.textContent}/`;
        clearscreen=false;
    slash=true;
    decimal=false;
});
equals.addEventListener("click",function(){
    // if(stc==1){
    //     if(min==false)//check negative sign
    //     answer-=num;
    //     else
    //     answer+=num;
    //     stc++;
    // }
    if(add){
        answer+=num;
        add=false;
    }
    if(subtract){
        answer-=num;
        subtract=false;
    }
    if(star){
        star=false;
    }
    if(slash){
        slash=false;
    }
    text.innerHTML=`${answer}`;
    console.log(num);
    count=1;decimal=false;
    num=0;
    clearscreen=true;
});