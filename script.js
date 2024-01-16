

let counter= document.querySelector("p");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let reset = document.querySelector(".reset");
let reading = parseInt(counter.innerText);
let lastVal= document.querySelector("h2");
let audio = new Audio('bell.wav');
// console.log(counter);

add.addEventListener("click",()=>{
    reading++;
    counter.innerText= reading;
});

sub.addEventListener("click",()=>{
    reading--;
    counter.innerText =reading;
});

reset.addEventListener("click",()=>{
    lastVal.innerText= `Last Value: ${reading}`;
    reading=0;
    counter.innerText= reading;
    audio.play();
});
