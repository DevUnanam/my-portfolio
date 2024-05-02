
/*this section Automatically collapse the navbar menu after clicking a link on mobile devices.*/
$(document).ready(function() {
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});


/*this section Add smooth scrolling to your navigation links so that 
when users click on a link, the page scrolls smoothly to the corresponding section*/
$(document).ready(function(){
    // Smooth scrolling for links
    $('a[href^="#"]').on('click', function(event) {
        var target = document.querySelector(this.getAttribute('href'));
        if( target ) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    });
  });
  
