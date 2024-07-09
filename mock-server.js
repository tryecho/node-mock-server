const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON body
app.use(bodyParser.json());

// POST endpoint to echo back the request as JSON
app.post('/*', (req, res) => {
    console.log('Received request at:', req.originalUrl);
    console.log('Received request body:', req.body);
    // Send back the request body as JSON
    res.json(req.body);
});

// Index route handler
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Default route handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
const PORT = 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mock server listening on port ${PORT}`);
});
