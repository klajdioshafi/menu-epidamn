const express = require('express');
const path =  require('path');
var cors = require('cors')
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const app = express();

let port = 3000 | process.env.PORT;
let publicPath = path.join(__dirname);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicPath));
app.use(logger('dev'));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})