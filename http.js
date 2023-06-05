const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write(`Welcome to the homepage, bro!`);
    res.end();
  } else if (req.url === '/about') {
    res.end('What do you wanna know about me, huh?');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write(`<h1>OOPS! Something went wrong</h1>`);
    res.end();
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
