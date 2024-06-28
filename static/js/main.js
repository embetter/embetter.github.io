document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-icon');
    const cross = document.getElementById('cross');
    const navHidden = document.getElementById('nav-hidden');
    const mainContent = document.getElementById('main_content');
    const mainHidden = document.getElementById('main-hidden');
    const containerDIV = document.getElementById('container_div');
    
    
    

    hamburger.addEventListener('click', function() {
        navHidden.style.display = 'block';
        hamburger.style.display = 'none';
        mainContent.style.display ='none';
        mainHidden.style.display = 'block';
 
        containerDIV.classList.add('backdrop-blur-md');
        
    });

    cross.addEventListener('click', function() {
        navHidden.style.display = 'none';
        hamburger.style.display = 'block';
        mainContent.style.display ='flex';
        mainHidden.style.display = 'none';
        containerDIV.classList.remove('backdrop-blur-md');
    });
});
