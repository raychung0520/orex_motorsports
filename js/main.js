
// TOP NAV TOGGLE

const toggleBtnTopNav = document.querySelector('.top-nav-toggle');
const topNav = document.querySelector('.top-nav-list');

toggleBtnTopNav.addEventListener('click', () => {
   
    topNav.classList.toggle('activeToggle');


});


// SIDE NAV TOGGLE

const toggleBtnSideNav = document.querySelector('.side-nav-toggle');
const sideNav = document.querySelector('.side-nav-list');

toggleBtnSideNav.addEventListener('click', () => {

    sideNav.classList.toggle('activeTogglee');


});


// SIDE NAV DROPDOWN MENUS

// Need more work



const dropdown = document.querySelectorAll('.dropdown-btn');
const dropdownCotainer = document.querySelectorAll('.dropdown-container');

dropdown[0].addEventListener('click', () => {

  dropdownCotainer[0].classList.toggle('expand');


});

dropdown[1].addEventListener('click', () => {
  
  dropdownCotainer[1].classList.toggle('expand');


});


dropdown[2].addEventListener('click', () => {

  dropdownCotainer[2].classList.toggle('expand');


});


dropdown[3].addEventListener('click', () => {

  dropdownCotainer[3].classList.toggle('expand');


});
dropdown[4].addEventListener('click', () => {

  dropdownCotainer[4].classList.toggle('expand');


});
dropdown[5].addEventListener('click', () => {

  dropdownCotainer[5].classList.toggle('expand');


});
dropdown[6].addEventListener('click', () => {

  dropdownCotainer[6].classList.toggle('expand');


});
dropdown[7].addEventListener('click', () => {

  dropdownCotainer[7].classList.toggle('expand');


});
dropdown[8].addEventListener('click', () => {

  dropdownCotainer[8].classList.toggle('expand');


});
dropdown[9].addEventListener('click', () => {

  dropdownCotainer[9].classList.toggle('expand');


});
dropdown[10].addEventListener('click', () => {

  dropdownCotainer[10].classList.toggle('expand');


});
dropdown[11].addEventListener('click', () => {

  dropdownCotainer[11].classList.toggle('expand');


});
dropdown[12].addEventListener('click', () => {

  dropdownCotainer[12].classList.toggle('expand');


});
dropdown[13].addEventListener('click', () => {

  dropdownCotainer[13].classList.toggle('expand');


});


// ------------ IMAGE SLIDER --------------

const slides=document.querySelector(".slider").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const indicator=document.querySelector(".indicator");
let index=0;


  prev.addEventListener("click",function(){
      prevSlide();
      updateCircleIndicator(); 
      resetTimer();
  })

  next.addEventListener("click",function(){
     nextSlide(); 
     updateCircleIndicator();
     resetTimer();
     
  })


   function circleIndicator(){
       for(let i=0; i< slides.length; i++){
         const div=document.createElement("div");
               //div.innerHTML=i+1;
               div.setAttribute("onclick","indicateSlide(this)")
               div.id=i;
               if(i==0){
                 div.className="active";
               }
              indicator.appendChild(div);
       }
   }
   circleIndicator();

   function indicateSlide(element){
        index=element.id;
        changeSlide();
        updateCircleIndicator();
        resetTimer();
   }
    
   function updateCircleIndicator(){
     for(let i=0; i<indicator.children.length; i++){
       indicator.children[i].classList.remove("active");
     }
     indicator.children[index].classList.add("active");
   }

  function prevSlide(){
     if(index==0){
       index=slides.length-1;
     }
     else{
       index--;
     }
     changeSlide();
  }

  function nextSlide(){
     if(index==slides.length-1){
       index=0;
     }
     else{
       index++;
     }
     changeSlide();
  }

  function changeSlide(){
           for(let i=0; i<slides.length; i++){
              slides[i].classList.remove("active");
           }

      slides[index].classList.add("active");
  }

  function resetTimer(){
      clearInterval(timer);
      timer=setInterval(autoPlay,4000);
  }

 
 function autoPlay(){
     nextSlide();
     updateCircleIndicator();
 }

 let timer=setInterval(autoPlay,4000);













