// File: app.js
const https = require('https');
const fs = require('fs');

// Load the SSL certificate and key from files
const options = {
    key: fs.readFileSync('/Users/bhavyasonigra/Desktop/ELECTIVE/NODE/certs/key.pem'),  // Use fs to read the key
    cert: fs.readFileSync('/Users/bhavyasonigra/Desktop/ELECTIVE/NODE/certs/cert.pem')  // Use fs to read the cert
};
https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello\n');
    //Make
}).listen(9080, '192.168.44.72', () => {
    console.log('Server is running on https://192.168.44.72:9080');
});
