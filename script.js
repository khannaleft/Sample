document.addEventListener('DOMContentLoaded', () => {
    const chatOutput = document.getElementById('chat-output');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const userMessage = chatInput.value.trim();
        if (userMessage) {
            appendMessage('You', userMessage);
            chatInput.value = '';
            handleBotResponse(userMessage);
        }
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function handleBotResponse(userMessage) {
        let botResponse = "I'm sorry, I didn't understand that. Can you please rephrase your question or let me know how I can assist you?";

        userMessage = userMessage.toLowerCase();
        if (userMessage.includes('hi') || userMessage.includes('hello')) {
            botResponse = "Hello! Welcome to our web design services. How can I help you today?";
        } else if (userMessage.includes('services')) {
            botResponse = "We offer a range of web design services using automation. Are you looking for a complete website design, a redesign, or specific features?";
        } else if (userMessage.includes('complete website design')) {
            botResponse = "Great! We can design a complete website tailored to your needs. Can you provide more details about your business and any specific requirements?";
        } else if (userMessage.includes('redesign')) {
            botResponse = "Sure! We can redesign your existing website. Could you please share your current website URL and what changes you are looking for?";
        } else if (userMessage.includes('specific features')) {
            botResponse = "Absolutely! Let us know which features you are interested in, and we can discuss how to implement them.";
        } else if (userMessage.includes('automation')) {
            botResponse = "We use various automation tools to streamline the web design process, ensuring efficiency and high quality. Would you like to know more about these tools?";
        } else if (userMessage.includes('pricing') || userMessage.includes('cost')) {
            botResponse = "Our pricing depends on the complexity and scope of the project. Could you please provide more details about your requirements so we can give you an accurate quote?";
        } else if (userMessage.includes('contact') || userMessage.includes('email')) {
            botResponse = "You can contact us at contact@yourwebsite.com or call us at (123) 456-7890. We look forward to hearing from you!";
        }

        appendMessage('Bot', botResponse);
    }
});
