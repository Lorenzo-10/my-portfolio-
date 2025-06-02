function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Show loader immediately
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loader').style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent scrolling during load
});

// When everything loads
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('loader');
    
    // 1. Fade out loader
    loader.style.opacity = '0';
    
    // 2. After fade completes:
    setTimeout(function() {
      // Simply remove the loader - no redirects/refreshes
      loader.style.display = 'none';
      document.body.style.overflow = ''; // Re-enable scrolling
      
      // Your homepage content is already there - no need to reload
    }, 500); // Match this with CSS transition time
  }, 2000); // 2 seconds loader duration
});
