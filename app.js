console.log('hello');

const mysql = require('mysql');
const express = require('express');

const app = express();
const path = 'path';
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
  host:
    'mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com' /* myql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com |||| 172.31.29.90*/,
  user: 'ezlearningtogether@gmail.com',
  password: '20Ne0b0@rd20',
  port: '3306',
  database: 'Neoboard',

  timeout: '60000',
  /* 3813 */
});

connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end(function (err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
});

/* pool.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err;
  console.log(`The solution is: ${rows[0].solution}`);
}); */

/* pool.getConnection(function (err, conn) {
  if (err) return res.send(400);

  // if you got a connection...
  conn.query('SELECT * FROM table WHERE id=? AND name=?', [id, name], function (
    err,
    rows
  ) {
    if (err) {
      conn.release();
      return res.send(400, 'Couldnt get a connection');
    }

    // for simplicity, just send the rows
    res.send(rows);

    // CLOSE THE CONNECTION
    conn.release();
  });
}); */

/* connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
}); */

/* app.listen(PORT, function () {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
    PORT,
    PORT
  );
}); */

/* "mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p" */

//Database connection
/* app.use(function (req, res, next) {
    res.locals.connection = mysql.createConnection({
      host: 'localhost',
      user: 'myqldbneoboard',
      password: '20Ne0b0ard20',
      database: 'Neoboard',
    });
    res.locals.connection.connect();
    next();
  }); */
