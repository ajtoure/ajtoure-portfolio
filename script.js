const app = {};

//The menu, contact form and scroll will be animated

//scroll animation/effect for each section

//menu animation here
//first the menu (already only displaying the hamburger) will be queried
//this will switch the class to a class that allows it to show the full menu


//contact form here interactions here
//this will toggle the contact form open and closed
//the two classes will be toggled when the arrow is clicked

/*portfolioApp.init = function(){
   $(window).scroll(function(){
      const winTop = $(window).scrollTop(), 
      docHeight = $(document).height(), 
      winHeight = $(window).height();
      const scrolled = (winTop/(docHeight - winHeight))*100;
      $('.scrollLine').css('width', (scrolled + '%'));
   });
};*/

// classList - shows/gets all classes
// contains - check classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

//navigation functionality

app.navBtn = document.querySelector('.navToggle');
app.navLinks = document.querySelector('.navList');

app.openNav = () => {
   app.navBtn.addEventListener('click', function(){
      setTimeout(function(){
         if(app.navLinks.classList.contains('navListHidden')){
            app.navLinks.classList.remove('navListHidden');
            app.navBtn.style.transform = 'rotate(90deg)';
         } else {
            app.navLinks.classList.add('navListHidden');
            app.navBtn.style.transform = 'rotate(0deg)';
         }
      }, 200);
   });
}

//calling the functions
app.init = () => {
   app.openNav();
}

//initializing the app
app.init();