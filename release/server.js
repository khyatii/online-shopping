const express= require('express'),
      bodyParser= require('body-parser'),
      cors= require('cors'),
      expressSession= require('express-session'),
      con= require('./server/config/db'),
      webRoutes= require('./server/routes/webRoutes'),
      apiRoutes= require('./server/routes/apiRoutes');

const app= express();

//session
app.use(expressSession({
    secret: 'mytoken',
    saveUninitialized: true,
    resave: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

app.use('/api',apiRoutes);
app.use('/',webRoutes);

app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});
