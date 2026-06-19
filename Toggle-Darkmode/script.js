const toggle = document.querySelector("#toggle");
const circle = document.querySelector("#circle");
const main=document.querySelector(".main");

let click1=true;
toggle.addEventListener("click", () => {
  if(click1==true){
    circle.style.transform="translateX(60px)";
    circle.style.backgroundColor="white";
    toggle.style.border= "1px solid white";
    main.style.backgroundColor="black";
    click1=false;
  }
  else{
    circle.style.transform="translateX(0px)";
    circle.style.backgroundColor="black";
    toggle.style.border= "1px solid grey";
    main.style.backgroundColor="white";
    click1=true;
  }
});