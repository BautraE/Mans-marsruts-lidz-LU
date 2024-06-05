document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.large-paragraph-content > div');
    const navLinks = document.querySelectorAll('.paragraph-navigation-links');
    const navBarHeight = 100;
  
    function setActiveLink() {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - navBarHeight - 10; // Adjust offset as needed
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

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        // Smooth scroll with offset
        window.scrollTo({
          top: targetElement.offsetTop - navBarHeight - 10,
          behavior: 'smooth'
        });
      });
    });
  
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Call once to set the active link on load
  });