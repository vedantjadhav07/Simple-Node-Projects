const socket = io();

// Prompt for username when the user opens the chat
let username = prompt("Enter your name:");
if (!username) username = "Anonymous";

// Send username to the server
socket.emit('set username', username);

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// Handle the form submission (sending messages)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim()) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

// Listen for incoming chat messages
socket.on('chat message', (data) => {
    const item = document.createElement('li');
    item.textContent = `${data.username}: ${data.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
