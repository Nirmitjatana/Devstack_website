const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener("click", ()=>{
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });