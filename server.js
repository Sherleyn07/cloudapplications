const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to the homepage for your individual assignment")
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("Hellooooo");

});
