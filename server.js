const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the homepage for your individual assignment")

});

app.listen(4500, () => {
    console.log("Hellooooo");

});