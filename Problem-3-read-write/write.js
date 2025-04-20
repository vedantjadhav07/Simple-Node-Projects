const fs = require('fs');

fs.writeFile('output.txt', 'Hello from Vedant!', (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
