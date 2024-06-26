document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.appointment-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevents the default form submission to the server

        // Collect form data
        const firstName = document.querySelector('.appointment-form input[placeholder="First Name"]').value;
        const lastName = document.querySelector('.appointment-form input[placeholder="Last Name"]').value;
        const date = document.querySelector('#appointment_date').value;
        const phone = document.querySelector('.appointment-form input[placeholder="Phone"]').value;
        const message = document.querySelector('.appointment-form textarea').value;

        // Construct the message
        const telegramMessage = `New Appointment Order:\n- Name: ${firstName} ${lastName}\n- Date: ${date}\n- Phone: ${phone}\n- Message: ${message}`;

        // Telegram API URL (replace with your bot token and your webhook URL)

        const botToken = '6540909143' +  ':AAGOFruojCtkKLFvuCu' + 'IveW9d_0TxCfnmgs';
        const chatIds = ['5111199449', '5534302320'];
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        chatIds.forEach(chatId => {
            const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: telegramMessage,
                    parse_mode: 'HTML'
                })
            }).then(response => response.json())
              .then(data => {
                  console.log(`Success for chat ID ${chatId}:`, data);
              })
              .catch((error) => {
                  console.error(`Error for chat ID ${chatId}:`, error);
              });
        });

        
        alert("Thanks, I will be in touch with you as soon as possible.");
    });
});
