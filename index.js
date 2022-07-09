const buttonDiv = document.querySelector(".course-buttons");
const buttonSelected = document.querySelectorAll(".p-btn");
const card = document.querySelectorAll(".card");

buttonDiv.addEventListener('click',(e)=>{
      const courseChoosen = e.target;
      
      if(!courseChoosen.classList.contains("p-btn")) return;

      buttonSelected.forEach((Element)=>{
        Element.classList.remove("p-btn-active");
      });

      courseChoosen.classList.add("p-btn-active");

      const buttonNumber = courseChoosen.dataset.btnNum;
      const courseDisplay = document.querySelectorAll(`.p-btn--${buttonNumber}`);

      card.forEach((Element)=>{
        Element.classList.add("p-btn-not-active");
      });
      courseDisplay.forEach((Element)=>{
        Element.classList.remove("p-btn-not-active");
      });
});



const head = document.querySelector(".header");
const nav  = document.querySelector(".menu-bar");

nav.addEventListener("click",() =>{
    head.classList.toggle("active");
});
