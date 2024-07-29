const icon =document.querySelector(".left-icon");
const listh4 = document.querySelectorAll(".left h4");
const icon2 = document.querySelector(".left-main");

icon.addEventListener("click",()=>{
    listh4.forEach(h4=>{
        h4.classList.toggle("hidden");
    });
  icon2.classList.toggle("left-main");
});

const icon3 = document.querySelector(".user1");
const icon4 = document.querySelector(".user");

icon4.addEventListener("click",()=>{
    icon3.classList.toggle("hidden");
});

const leftbody = document.querySelectorAll('.left-body'); 
const box= document.querySelectorAll('.box'); 
     
leftbody.forEach((element,index) => {
   
    element.addEventListener("click", () => {
        leftbody.forEach(element => element.style.color = "white");
        element.style.color = "red";
        box.forEach(element => element.style.display = "none");
        box[index].style.display = "block";
    })
});


