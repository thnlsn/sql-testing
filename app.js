console.log('hello');

const mysql = require('mysql');
const express = require('express');

const app = express();
const path = 'path';
const PORT = process.env.PORT || 3306;

const pool = mysql.createPool({
  host: 'myql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com',
  user: 'myqldbneoboard',
  password: '20Ne0b0ard20',
  port: 3306,
  database: 'Neoboard',
});

pool.getConnection(function (err, conn) {
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
});

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
