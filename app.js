const express = require("express");
const path = require("path");
const app = express();
const wm_router = require("./WMRouter.js");

app.use("/Styles", express.static(__dirname + "/Styles"));

app.use("/Scripts", express.static(path.join(__dirname, "/Scripts")));

app.use("/Scripts", express.static(path.join(__dirname, "/img")));

app.use("/WebMining", wm_router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/Index.html"));
});

app.get("/Analytics", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/GoogleAnalytics.html"));
});

app.get("/TextMining", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/TextMining.html"));
});

const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log(
    `Servidor escuchando en el puerto ${puerto}\nPresione Ctrl+C para terminar el proceso...`
  );
});
