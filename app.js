console.log('hello');

const mysql = require('mysql');
const express = require('express');

const app = express();
const path = 'path';
const PORT = process.env.PORT || 3306;

//Database connection
app.use(function (req, res, next) {
  res.locals.connection = mysql.createConnection({
    host: 'localhost',
    user: 'myqldbneoboard',
    password: '20Ne0b0ard20',
    database: 'Neoboard',
  });
  res.locals.connection.connect();
  next();
});

app.get('/home', function (req, res) {
  db.smoi.findAll({}).then(function (results) {
    console.log(`Here are the results from the GET request: ${results}`);
    res.json(results);
  });
});

app.listen(PORT, function () {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
    PORT,
    PORT
  );
});

/* "mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p" */
