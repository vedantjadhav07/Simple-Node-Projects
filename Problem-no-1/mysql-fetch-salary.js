const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'vedant07',
  database: 'exp16'
});


connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting: ' + err.stack);
    return;
  }

  console.log('✅ Connected to MySQL');

  
  connection.query('SELECT ename, sal FROM emp', (error, results) => {
    if (error) throw error;

    console.log('📄 Employee Salaries:');
    console.table(results);

    
    connection.end(() => {
      console.log('🔌 Connection closed');
    });
  });
});
