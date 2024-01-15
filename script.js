

let counter= document.querySelector("p");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let reset = document.querySelector(".reset");
let reading = parseInt(counter.innerText);
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
    reading=0;
    counter.innerText= reading;
});
