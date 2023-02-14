const express = require("express");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/style.css", (req, res) => {
  res.sendFile(`${__dirname}/public/style.css`);
});

app.get("/img/hero.jpg", (req, res) => {
  res.sendFile(`${__dirname}/public/img/hero.jpg`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
