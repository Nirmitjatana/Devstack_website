const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');
const tabs =document.querySelector('.nav-links li a');
const nj = document.querySelector('.page-section');
var tab;

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

nj.addEventListener("click", ()=>{
  $("#hamburger-6").click()
  // console.log("nj")
})


$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault();

      var target = $(this).attr("href");

      
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 300, function() {
          location.hash = target; 
      });
      $("#hamburger-6").click()
      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.nav-links li a.active').removeClass('active');
          $('.nav-links li a').eq(i).addClass('active');
          tab=1;
      } 

  });
}).scroll();


