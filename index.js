const express = require("express");
const app = express();
var bodyParser = require('body-parser')

const PORT = 8080 || process.env.PORT;

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(express.static("public"));

//Starts the server on the given port
app.listen(PORT, () => {
    console.log(`Starting the server on port ${PORT}!`);
});
