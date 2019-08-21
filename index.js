const express = require('express');
const port = process.env.PORT;

var app = express();

app.get("/", (req,res) => {
    res.send("Hello Siouxers!");
});

app.listen(port,'0.0.0.0', () => {
    console.log(`Listening on port ${port}`);
});
