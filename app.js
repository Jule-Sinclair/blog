const http = require('http');
const express = require('express');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const PORT = process.env.PORT
const app = express();

apt.get("/", (req, res) => {
  res.send({ hello: 'world' });
});

app.listen(PORT);