document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.work-entry img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('img');

    images.forEach(image => {
        image.addEventListener('click', function () {
            lightboxImage.src = this.src; // Set the src for the lightbox image
            lightbox.style.display = 'flex'; // Show the lightbox
        });
    });

    // Click anywhere on the lightbox to close it
    lightbox.addEventListener('click', function () {
        lightbox.style.display = 'none'; // Hide the lightbox
        lightboxImage.src = ''; // Optional: Clear the image source
    });
});
