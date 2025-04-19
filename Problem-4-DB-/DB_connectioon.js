const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vedant07',
  database: 'exp16'
});

connection.connect((err) => {
  if (err) {
    console.error('Connection error:', err);
    return;
  }
  console.log(' Connected to MySQL database');
});


connection.query('SELECT * FROM accounts', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
  