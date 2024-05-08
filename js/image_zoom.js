document.addEventListener('DOMContentLoaded', function() {
    // Create only one lightbox div and append it to the body
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';  // Assign an ID for easy access
    lightbox.className = 'lightbox';
    lightbox.style.display = 'none'; // Start with the lightbox hidden
    lightbox.innerHTML = '<img>'; // Add an img element inside the lightbox
    document.body.appendChild(lightbox);

    // Get all work-entry links
    const workEntries = document.querySelectorAll('.work-entry a');

    // Attach click event to each work-entry link
    workEntries.forEach(entry => {
        entry.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const img = lightbox.querySelector('img'); // Select the img inside the lightbox
            img.src = this.querySelector('img').src; // Set the source of the lightbox image
            lightbox.style.display = 'flex'; // Display the lightbox
        });
    });

    // Hide the lightbox when clicked
    lightbox.addEventListener('click', (event) => {
        if (event.target !== lightbox.querySelector('img')) {
            lightbox.style.display = 'none'; // Hide the lightbox unless the image itself is clicked
        }
    });
});
