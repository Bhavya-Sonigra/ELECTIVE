// File: app.js
const http = require('http');

// Create a simple HTTP server
// that responds with "Hello, World!" to all requests
http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body "Hello, World!"
    res.end('Hello, World!\n');
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
