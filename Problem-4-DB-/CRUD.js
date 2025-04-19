const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vedant07', 
  database: 'exp16' 
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

/*
const insertQuery = 'INSERT INTO accounts VALUES (?, ?, ?)';
connection.query(insertQuery, [101,'Vedant', 5000], (err, results) => {
  if (err) throw err;
  console.log(' User added with ID:', results.insertId);
});*/
 


/*const readQuery = 'SELECT * FROM accounts';
connection.query(readQuery, (err, results) => {
  if (err) throw err;
  console.log('User List:', results);
});*/
 

/*const updateQuery = 'UPDATE accounts SET balance = ? WHERE account_id = ?';
connection.query(updateQuery, [60000, 101], (err, results) => {
  if (err) throw err;
  console.log(' Rows updated:', results.affectedRows);
}); */
 

 const deleteQuery = 'DELETE FROM accounts WHERE account_id = ?';
connection.query(deleteQuery, [101], (err, results) => {
  if (err) throw err;
  console.log('🗑️ Rows deleted:', results.affectedRows);
});
 