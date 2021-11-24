const http = require("http");
const testData = require('./test-data');

const host = "127.0.0.1";
const port = 7000;

function notFound(res) {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Not found\n");
}

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET": {
      switch (req.url) {
        case "/home": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("Home page\n");
          break;
        }
        case "/about": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          res.end("About page\n");
          break;
        }
        case "/api/data": {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/json");
          res.end(JSON.stringify(testData));
          break;
        }
        default: {
          notFound(res);
          break;
        }
      }
      break;
    }
    default: {
      notFound(res);
      break;
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server listens http://${host}:${port}`);
});
