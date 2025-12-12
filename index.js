const express = require("express");
const app = express();

// Listen to the request event
app.get("/", (req, res) => res.send("<h1>Index</h1>"));
app.get("/about", (req, res) => res.send("<h1>About</h1>"));
app.get("/contact-me", (req, res) => res.send("<h1>Contact Me</h1>"));
app.use((req, res, next) => {
  res.send("<h1>404</h1>");
});

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});
