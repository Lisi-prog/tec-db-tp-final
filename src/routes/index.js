const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");
const router = express.Router();
const pool = require("../database");
// const passport = require("passport");

router.get("/", (req, res) => {
    res.render("index.html");
});

router.post("/sql", async (req) => {
    const {ssql} = req.body;
    console.log(ssql);
    const sql = await pool.query(ssql);
    console.log(sql);
});

module.exports = router;