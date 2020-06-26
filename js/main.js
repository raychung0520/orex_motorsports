
// TOP NAV TOGGLE

const toggleBtnTopNav = document.querySelector('.top-nav-toggle');
const topNav = document.querySelector('.top-nav-list');

toggleBtnTopNav.addEventListener('click', () => {
    console.log('111');
    topNav.classList.toggle('activeToggle');


});


// SIDE NAV TOGGLE

const toggleBtnSideNav = document.querySelector('.side-nav-toggle');
const sideNav = document.querySelector('.side-nav-list');

toggleBtnSideNav.addEventListener('click', () => {
    console.log('222');
    sideNav.classList.toggle('activeTogglee');


});






const dropdown = document.querySelectorAll('.dropdown-btn');
const dropdownCotainer = document.querySelectorAll('.dropdown-container');


dropdown[1].addEventListener('click', () => {
    console.log('333');
    dropdownCotainer[1].classList.toggle('expand');


});

dropdown[0].addEventListener('click', () => {
    console.log('333');
    dropdownCotainer[0].classList.toggle('expand');


});



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

