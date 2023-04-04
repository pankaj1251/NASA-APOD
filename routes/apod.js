const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

const NASA_API_KEY = process.env.VERCEL_API_KEY; // Replace with your own API key
const NASA_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

router.get("/", (req, res, next) => {
  fetch(NASA_URL)
    .then((response) => response.json())
    .then((data) => {
      const title = data.title;
      const date = data.date;
      const explanation = data.explanation;
      const hdurl = data.hdurl;

      res.render("apod", { title, date, explanation, hdurl });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error fetching data from NASA API");
    });
});

module.exports = router;
