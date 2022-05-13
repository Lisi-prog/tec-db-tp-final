const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");
const router = express.Router();
const pool = require("../database");
// const passport = require("passport");

router.get("/", (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.render("index.html");
});

router.post("/sql", async (req, res) => {
    const {sentenciaSQL} = req.body;
    console.log(sentenciaSQL);
    const resultSQL = await pool.query(sentenciaSQL);
    console.log(resultSQL);
    res.render("../views/table.html", {resultSQL});
});

module.exports = router;