const mongoose = require('mongoose');
var config = require('../env.json')[process.env.NODE_ENV || 'development'];

// mongoose.connect(config.MONGO_URI, config.MONGO_OPTIONS);

mongoose.createConnection('mongodb://localhost/mean_4pm',  { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', function (err) {
    console.log("Connected to DB using URI: " + config.MONGO_URI);
});

mongoose.connection.on('error', function (err) {
    console.log(err);
});

mongoose.connection.on('disconnected', function () {
    self.connectToDatabase();
});