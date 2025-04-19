const http = require('http');

http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.end('GET Request Received');
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      res.end(`POST data: ${body}`);
    });
  }
}).listen(3000);
