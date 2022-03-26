const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const RestConfig = require('./configs/RestConfig');

// Express body parser //
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Utils //

const base_decoder = require('./utils/Decoder');

// Config Values //

const port = RestConfig.server_port;

// Uptime //
var start = Date.now();

function getUptime() {
    var end = Date.now();
    var distance = end - start;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return days + "d " + hours + "g "
        + minutes + "m " + seconds + "s";
}

// Routes //

app.get('/', (req, res) => {
    res.status(200).send({
        "author": "PetardekYT (twojastrata_#5358)",
        "version": "1.0, beta",
        "uptime": getUptime()
    });
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(port, console.log(`Server | Serwer wystartowal na porcie: ${port}`));