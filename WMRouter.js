const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/WebMining.html"));
});

router.get("/Content", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/WMContent.html"));
});

router.get("/WebStructure", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/WMStructure.html"));
});

router.get("/UsageMining", (req, res) => {
  res.sendFile(path.join(__dirname, "/Views/WMUseage.html"));
});

module.exports = router;
