const portfolioApp = {};
//The menu, contact form and scroll will be animated

//scroll animation/effect for each section

//menu animation here
//first the menu (already only displaying the hamburger) will be queried
//this will switch the class to a class that allows it to show the full menu


//contact form here interactions here
//this will toggle the contact form open and closed
//the two classes will be toggled when the arrow is clicked

portfolioApp.init = function(){
   $(window).scroll(function(){
      const winTop = $(window).scrollTop(), 
      docHeight = $(document).height(), 
      winHeight = $(window).height();
      const scrolled = (winTop/(docHeight - winHeight))*100;
      $('.scrollLine').css('width', (scrolled + '%'));
   });
};

portfolioApp.init();