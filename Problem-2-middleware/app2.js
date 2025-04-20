const express = require('express');
const app = express(); 
app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
  });
  
  app.use((req, res, next) => {
    console.log('Middleware 2');
    next();
  });
  
  app.get('/', (req, res) => {
    res.send('Final Route Handler');
  });
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
  });