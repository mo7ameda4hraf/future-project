var nav_sections = $('section');
var main_nav = $('.nav-menu, #mobile-nav');

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass('active');
    }
  });
});
var mybutton = document.getElementById("makedark"),
ele=document.getElementById("dark");
/* bg-black */
mybutton.onclick=function(){
    "use strict";
    if(this.textContent==="Dark"){
      ele.classList.add("dark");
      this.textContent = "light";
      ele.style.transition = "all 2s ease-in-out"
    }else{
      ele.classList.remove("dark");
      this.textContent = "Dark";
      ele.style.transition = "all 2s  ease-in-out"

    }
};
if(this.textContent==="Dark"){
  mybutton.classList.add("bg-black");
}
else{
  mybutton.classList.add("bg-white");
  
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('nav').addClass('header-scrolled');
    } else {
      $('nav').removeClass('header-scrolled');
    }
  });