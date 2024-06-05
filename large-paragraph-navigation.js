document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.large-paragraph-content > div');
    const navLinks = document.querySelectorAll('.paragraph-navigation-links');
  
    function setActiveLink() {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust offset as needed
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Call once to set the active link on load
  });