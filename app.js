const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello there! This is my first E2E Pipeline project'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
