http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  // Headers required for CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  // Send back hello world
  res.writeHead(200, headers);
  res.end("Hello World! This is my first Node.js server");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
