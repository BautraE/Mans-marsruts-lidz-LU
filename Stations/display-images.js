
// Function to load images into the gallery
function loadImages() {
    // Select all img elements within the image-collection-container
    const imgElements = document.querySelectorAll('.image-collection-container .image');
  
    // Loop through the first 3 images in the array and set the src attribute
    for (let i = 0; i < imgElements.length; i++) {
        imgElements[i].src = images[i].src;
        imgElements[i].alt = images[i].alt;
        imgElements[i].dataset.index = i; // Store the index of the image
        imgElements[i].onclick = function() {
            showModal(i);
        };
    }

    // Set the text for the extra images count
    const extraImagesCount = images.length - 3;
    const extraImagesText = extraImagesCount > 0 ? `+${extraImagesCount}` : '';
    document.querySelector('.additional-image-count').textContent = extraImagesText;
}

// Function to show the modal with the selected image
function showModal(index) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const counter = document.getElementById("counter");
    modal.style.display = "block";
    modalImg.src = images[index].src;
    modalImg.alt = images[index].alt;
    currentIndex = index;
    counter.textContent = `${index + 1} / ${images.length}`;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}
  
// Function to show the next image
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    showModal(currentIndex);
}
  
// Function to show the previous image
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showModal(currentIndex);
}
  
// Load images when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadImages);

document.addEventListener('DOMContentLoaded', loadImages);

// Add event listeners for modal navigation and close buttons
document.querySelector('.close').onclick = closeModal;
document.querySelector('.next').onclick = showNext;
document.querySelector('.prev').onclick = showPrev;

// Close the modal when clicking outside of the image
document.getElementById("myModal").onclick = function(event) {
    if (event.target === this) {
        closeModal();
    }
};