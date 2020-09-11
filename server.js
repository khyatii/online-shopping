const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    expressSession = require('express-session'),
    con = require('./server/config/db'),
    webRoutes = require('./server/routes/webRoutes'),
    apiRoutes = require('./server/routes/apiRoutes');

const app = express();

//session
app.use(expressSession({
    secret: 'mytoken',
    saveUninitialized: true,
    resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/api', apiRoutes);
app.use('/', webRoutes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server is running at http://localhost:' + port);
});