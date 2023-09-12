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
});
