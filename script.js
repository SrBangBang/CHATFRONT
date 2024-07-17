function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message !== '') {
        addMessage('user-message', message);
        userInput.value = '';
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage('bot-message', botResponse);
        }, 1000);
    }
}

function addMessage(className, message) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'hola': '¡Hola! ¿Cómo estás?',
        'adiós': '¡Hasta luego!',
        'cómo estás': 'Estoy bien, gracias por preguntar. ¿Y tú?',
        'default': 'Lo siento, no entiendo tu pregunta.'
    };

    message = message.toLowerCase();
    return responses[message] || responses['default'];
}
