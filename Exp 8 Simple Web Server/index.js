// server.js

const http = require('http'); // Import the http module

// Create a server
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Write a response body
    res.end('<h1>Hello, World!</h1><p>Welcome to my simple web server!</p>');
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
