import http from "node:http";
import fs from "node:fs";

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  let file;
  switch (request.url) {
    case "/":
      file = "index.html";
      break;
    case "/about":
      file = "about.html";
      break;
    case "/contact-me":
      file = "contact-me.html";
      break;
    default:
      file = "404.html";
      break;
  }

  let data;
  try {
    data = fs.readFileSync("./" + file, "utf8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  } catch (err) {
    console.error(err);
  }
});

server.listen(8080);
