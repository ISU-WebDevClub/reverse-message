const express = require("express");
const reverse = require("../index.js");
const app = express();
const bodyParser = require('body-parser')

const PORT = 8080 || process.env.PORT;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static("public"));
app.use(reverse());

app.get('/middleware-test', (request, response) => {
    response.send(request.query);
});

// Starts the server on the given port
app.listen(PORT, () => {
    console.log(`Starting the server on http://localhost:${PORT}!`);
});
