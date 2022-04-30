const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");
const router = express.Router();
// const passport = require("passport");

router.get("/", (req, res) => {
    res.render("index.html");
});

module.exports = router;