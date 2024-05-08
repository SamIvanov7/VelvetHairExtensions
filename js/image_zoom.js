document.addEventListener('DOMContentLoaded', function() {
    const workEntries = document.querySelectorAll('.work-entry a'); // Select the links directly
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const img = document.createElement('img'); // Create an img element for the lightbox
    lightbox.appendChild(img);

    workEntries.forEach(entry => {
        entry.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            img.src = this.querySelector('img').src; // Set the source of the lightbox image
            lightbox.style.display = 'flex'; // Display the lightbox
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none'; // Hide the lightbox on click
    });
});
