const express = require('express');
// server object creation 
const server = express();

server.get ('/', (req, res) => {
  // send a response to the client
  res.send('Hello, World!');
});


server.get('/about', (req, res) => {
    // send a response to the client
    res.send('<h1>About Page</h1>');
});

// server running on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});