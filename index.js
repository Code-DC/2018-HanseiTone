const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const dummy = require('./tools/dummy');

//db connect
const models = require("./models");
models.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("✓ DB connection success.");
    dummy.insert();
  })
  .catch(err => {
    console.error(err);
    console.log("✗ DB connection error. Please make sure DB is running.");
    process.exit();
  });

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static('images'));


app.use(require('./tools/authentication'));
app.use((req, res, next) => {
  if (req.body && req.body.data) {
    req.body = JSON.parse(req.body.data);
  }
  next();
});

//route use
app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: err.message })
});

app.listen(3000, () => {
  console.log('OK');
})

module.exports = app;
