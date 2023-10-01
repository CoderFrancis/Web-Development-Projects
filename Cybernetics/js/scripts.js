let slideIndex = 0;

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];

    images.forEach(imgSrc => {
        // Create a new slide div for each image
        const slideDiv = document.createElement('div');
        slideDiv.className = "slide fade";

        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.alt = "Description for " + imgSrc; // Adjust as per your need

        // Append the img to the slide div and the slide div to the slideshow container
        slideDiv.appendChild(imgElement);
        slideshowContainer.appendChild(slideDiv);
    });

    // Show the first slide and start the slideshow timer
    showSlide(slideIndex);
    setInterval(function() {
        moveSlide(1);
    }, 5000);
});
