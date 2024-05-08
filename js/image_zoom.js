document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.work-entry img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    const imgTag = document.createElement('img');
    lightbox.appendChild(imgTag);

    images.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            imgTag.src = image.src;
        });
    });

    lightbox.addEventListener('click', e => {
        if (e.target !== imgTag) {
            lightbox.style.display = 'none';
        }
    });
});
