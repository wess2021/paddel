// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-nav-icon');
    const mobileSidebar = document.querySelector('.mobile-sidebar.mobile-sidebar4');
    const menuClose = document.querySelector('.menu-close');
    
    if (mobileMenuBtn && mobileSidebar) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileSidebar.classList.add('mobile-menu-active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
        
        menuClose.addEventListener('click', function() {
            mobileSidebar.classList.remove('mobile-menu-active');
            document.body.style.overflow = ''; // Restore scrolling
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileSidebar.classList.contains('mobile-menu-active') && 
                !mobileSidebar.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                mobileSidebar.classList.remove('mobile-menu-active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }
}); 