const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const statPath = path.resolve(__dirname + "/websciquiz2ang/dist/websciquiz2ang");


app.get("/countries", (req, res) => {
    fetch("https://api.covid19api.com/countries")
        .then((json) => json.json())
        .then((data) => res.json(data));
});

app.use(express.static(statPath));
app.listen(port, () => {
    console.log("Listening on port:" + port);
});



