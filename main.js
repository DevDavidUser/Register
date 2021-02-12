// Packages request
const express = require('express'),
      mongoose = require('mongoose'),
      flash = require('connect-flash'),
      session = require('express-session');

const app = express();
//DB configuration
const uri = "mongodb://localhost/db_example";
mongoose
  .connect(
    uri,
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  //Ejs configuration
  app.set('view engine', 'ejs');

//Express body parser
app.use(express.urlencoded({ extended: true }));

//Express session middleware
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

//Connect flash middleware
// Connect flash
app.use(flash());
// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
//Routes configuration
app.use('/',require('./routes/index.js'));
app.use('/',require('./routes/user.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));