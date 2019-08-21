const express = require('express');
const PORT = 5000;

var app = express();

app.get("/", (req,res) => {
    res.send("Hello Siouxers!");
});

app.listen(PORT, (err) => {
    console.log(`Listening on port ${PORT}`);
});
