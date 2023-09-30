let slideIndex = 0;

function showSlide(n) {
    let slides = document.getElementsByClassName("slide");

    // Wrap around if index goes out of bounds
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Translate the slides to show the current one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', function() {
    // Add images to the gallery dynamically
    const gallery = document.getElementById('gallery');
    const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']; // add image file names

    images.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = img;
        imageElement.style.maxWidth = '300px';
        imageElement.style.margin = '10px';
        gallery.appendChild(imageElement);
    });

    // Show the first slide
    showSlide(slideIndex);

    // Automatic slideshow - change image every 5 seconds
    setInterval(function() {
        moveSlide(1);
    }, 5000);
});
