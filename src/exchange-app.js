const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const mongoose = require("mongoose")
const config = require("../config")
const PlayerRouter = require("./router")
const app = express();

mongoose.connect(config.DBCONNECT, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database is connected")
}, err => { console.log('Can not connect to the database' + err) });

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(config.BASEURL + '/client'));
app.use(express.static(config.BASEURL + '/uploads'));

app.use('/api', (req, res, next) => {
    console.log(req.url, "=========================================")
    PlayerRouter(req, res, next)
});
app.get('*', (req, res) => { res.sendFile(path.join(config.BASEURL, 'client/index.html')) });

app.listen(3001, () => { console.log(`Started server on => http://localhost:${3001}`) });