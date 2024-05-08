document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.appointment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = {
            firstName: document.querySelector('.appointment-form input[placeholder="First Name"]').value,
            lastName: document.querySelector('.appointment-form input[placeholder="Last Name"]').value,
            date: document.querySelector('#appointment_date').value,
            phone: document.querySelector('.appointment-form input[placeholder="Phone"]').value,
            message: document.querySelector('.appointment-form textarea').value
        };

        fetch('/sendToTelegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert("Order sent successfully to Telegram!");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to send order to Telegram.");
        });
    });
});
