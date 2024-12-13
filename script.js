let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active1";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}
// hamburger menu 
const hamburger = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);

//Function to scroll back to top of page
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
//show or hide scroll btn depending on position
window.onscroll = function(){
  var btn = document.getElementById('back-to-top-btn');
  if(document.body.scrollTop > 20||
  document.documentElement.scrollTop > 20){
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none'
  }
};


//dark and light mode
const modeSwitch = document.querySelector('#mode-switch');
const background = document.querySelector('.background');


modeSwitch.addEventListener('click', () => {
  const newMode = background.dataset.mode === 'light' ? 'dark': 'light';
  background.dataset.mode = newMode;
  localStorage.setItem('mode', newMode);
});

const savedMode = localStorage.getItem(mode);
if (savedMode){
  background.dataset.mode = savedMode;
}

localStorage.setItem('mode', newMode);


function setMode(mode){
  localStorage.setItem('mode', mode);
}
function getMode(){
  return localStorage.getItem('mode');
}
function switchMode(){
  const currentMode = getMode();
  const newMode = currentMode === 'light' ? 'dark' : 'light';
  setMode(newMode);
  document.body.classList.toggle('dark-mode');
}





