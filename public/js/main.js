document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-icon');
    const cross = document.getElementById('cross');

    //hidden nav which will be displayed on mobile view and is hidden until hamburger icon clicked
    const navHidden = document.getElementById('nav-hidden');    

   //outermost div of base html template    
    const containerDIV = document.getElementById('container_div');

    //For footer
    const footer = document.getElementById('footer');

    //for main content of each page
    const pageContent = document.getElementById('page-content');    

    //for heading portion of page
    const heading_portion = document.getElementById('heading-portion'); 
  
    
    

    hamburger.addEventListener('click', function() {

        //navigation of hamburger icon shown and hamburger icon hidden
        navHidden.style.display = 'block';
        hamburger.style.display = 'none';
        
        //background is blurred
        containerDIV.classList.add('backdrop-blur-md');

        //footer, main content and heading portion display hidden
        footer.style.display = 'none';
        pageContent.style.display='none';
        heading_portion.style.display ='none';
    });

    cross.addEventListener('click', function() {

        //navigation of hamburger icon hidden and hamburger icon shown
        navHidden.style.display = 'none';
        hamburger.style.display = 'block';

        //footer, main content and heading portion back to flex display
        footer.style.display = 'flex';
        pageContent.style.display='flex';
        heading_portion.style.display='block'
        //background blur removed
        containerDIV.classList.remove('backdrop-blur-md');
    });
});
