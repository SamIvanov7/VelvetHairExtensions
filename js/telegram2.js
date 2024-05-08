document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevents the default form submission to the server

        // Collect form data
        const name = form.querySelector('input[placeholder="Your Name"]').value;
        const email = form.querySelector('input[placeholder="Your Email"]').value;
        const subject = form.querySelector('input[placeholder="Subject"]').value;
        const messageContent = form.querySelector('textarea[placeholder="Message"]').value;

        // Construct the message to send to Telegram
        const telegramMessage = `You have a new contact request:\n- Name: ${name}\n- Email: ${email}\n- Subject: ${subject}\n- Message: ${messageContent}`;

        // Telegram API URL (Replace 'YOUR_BOT_TOKEN' with your actual bot token)
        const botToken = '6540909143' +  ':AAGOFruojCtkKLFvuCu' + 'IveW9d_0TxCfnmgs';
        const chatIds = ['5111199449', '5534302320'];  // Array of chat IDs

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
                  alert("Message sent successfully to Telegram!");
              })
              .catch((error) => {
                  console.error(`Error for chat ID ${chatId}:`, error);
                  alert("Failed to send message to Telegram.");
              });
        });
    });
});
