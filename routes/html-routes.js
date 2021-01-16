const path = require("path");
const Router = require("express").Router();

Router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

Router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

Router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = Router;