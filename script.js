function themeSwitch() {
    // Theme switch slider
    var elements = document.querySelectorAll('div.theme-navbar');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-theme-switch-background");
    });
    elements = document.querySelectorAll('div.theme-slider');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-theme-switch-slider");
    });
    elements = document.querySelectorAll('p.slider-text');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-theme-switch-slider-text");
    });

    // Selects text in page
    elements = document.querySelectorAll('p.paragraph, h1.heading-1, h2.heading-2, .under-image-text');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-text");
    });

    // Selects backgrounds in pages
    elements = document.querySelectorAll('div.darker-bg');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-darker-bg");
    });
    elements = document.querySelectorAll('div.lighter-bg');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-lighter-bg");
    });

    // Selects and edits other elements 
    // Trains page paragraph image backgrounds
    elements = document.querySelectorAll('div.paragraph-image-container');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-image-container");
    });

    // Trains page paragraph navigation
    elements = document.querySelectorAll('a.paragraph-navigation-links');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-paragraph-navigation");
    });

    // Links in station pages
    elements = document.querySelectorAll('a.station-link');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-station-link");
    });

    // Tracks in station list page
    elements = document.querySelectorAll('div.tracks span');
    elements.forEach(function(element) {
        element.classList.toggle("light-mode-tracks");
    });
}

function mobileMenuToggle() {
    var elements = document.querySelectorAll('div.links-navbar');
    elements.forEach(function(element) {
        element.classList.toggle("mobile-menu-visibility");
    });
    var elements = document.querySelectorAll('img.close-menu-icon');
    elements.forEach(function(element) {
        element.classList.toggle("mobile-menu-close-visibility");
    });
}

// function mobileMenuHide() {
//     var elements = document.querySelectorAll('div.links-navbar');
//     elements.forEach(function(element) {
//         element.classList.toggle("mobile-menu-visibility");
//     });
// }