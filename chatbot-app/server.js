const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Store usernames mapped to socket IDs
const users = {};

// Serve static files from "public" folder
app.use(express.static('public'));

// Listen for socket connections
io.on('connection', (socket) => {
    console.log('🟢 New user connected');

    // Listen for username from client
    socket.on('set username', (username) => {
        users[socket.id] = username;
    });

    // When a user sends a message
    socket.on('chat message', (msg) => {
        const user = users[socket.id] || "Anonymous";
        io.emit('chat message', {
            username: user,
            message: msg
        });
    });

    // On user disconnect
    socket.on('disconnect', () => {
        console.log(`🔴 ${users[socket.id] || 'User'} disconnected`);
        delete users[socket.id];
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
