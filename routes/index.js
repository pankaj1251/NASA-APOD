const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

router.get("/home", ensureAuth, (req, res) => {
  res.render("home");
});

router.get("/apod", (req, res) => {
  res.send("APODDDD");
});
module.exports = router;
