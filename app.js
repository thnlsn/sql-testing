console.log('hello');

const mysql = require('mysql');
const express = require('express');

const dbConfig = require('./config/db.config');

const app = express();
const path = 'path';
const PORT = process.env.PORT || 3306;

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

/* app.get('/createpostabletable', (req, res) => {
  let sql =
    'CREATE TABLE test(id int AUTO_INCREMENT, image VARCHAR(255), name VARCHAR(255), username VARCHAR(255), joinDate VARCHAR(255), college VARCHAR(255), major VARCHAR(255), city VARCHAR(255), PRIMARY KEY(id))';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Posts table created');
  });
}); */

app.get('/addpost1', (req, res) => {
  let post = {
    image: 'data/images/warner.jpg',
    name: 'Arthur Fleck',
    username: 'TheJoker123',
    joinDate: 'February 129st, 1972',
    college: 'Gotham City College',
    major: 'Theatre',
    city: 'Gotham, NY',
  };
  let sql = 'INSERT INTO test SET ?;';
  let query = connection.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 1 added');
  });
});

app.get('/testposts', (req, res) => {
  let sql = 'SELECT * FROM users;';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send('posts from test fetched');
  });
});

app.get('/showtables', (req, res) => {
  let sql = 'SHOW TABLES;';
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('res');
  });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Neoboard.' });
});

app.listen(PORT, function () {
  console.log(
    `==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`,
    PORT,
    PORT
  );
});

/*

connection.connect(function (err) {
  if (err) throw err;
  connection.query('SELECT * FROM users', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
}); 

*/

/* connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
}); */

/* connection.end(function (err) {
  if (err) {
    return console.log('error:' + err.message);
  }
  console.log('Close the database connection.');
}); */

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

/* 

mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p
mysql -h mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com -P 3306 -u myqldbneoboard -p

*/

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

//This is the real deal
/*   host:
  'mysql-db-neoboard.ccauxyrnch3q.us-west-2.rds.amazonaws.com',
user: 'myqldbneoboard',
password: '20Ne0b0ard20',
port: '3306',
database: 'Neoboard', */
