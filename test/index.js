const express = require("express");
const reverse = require("./reverse-message/index.js");
const app = express();
var bodyParser = require('body-parser')

const PORT = 8080 || process.env.PORT;

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static("public"));
app.use(reverse());

app.get('/middleware-test', (request, response) => {
    console.log("I ran");
    response.send(request.query.message);
});

//Starts the server on the given port
app.listen(PORT, () => {
    console.log(`Starting the server on port ${PORT}!`);
});
