const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");
const router = express.Router();
const pool = require("../database");
const customerController = require("../controllers/customController");
// const passport = require("passport");

router.get("/", (req, res) => {
    const resultSQL = null;
    const fojaSQL = null;
    res.render("index.html", {resultSQL, fojaSQL});
});

router.post("/sql", async (req, res) => {
     const {sentenciaSQL} = req.body;
     const fojaSQL = null;
     const resultSQL = await pool.query(sentenciaSQL);
     res.render("index.html", {resultSQL, fojaSQL});
});

router.post("/newFoja", async (req, res) => {
    const {id_obra} = req.body;
    const resultSQL = null;
    const fojaSQL = await pool.query("SELECT * FROM Item WHERE id_obra= ?", [id_obra]);
    console.log(fojaSQL);
    res.render("index.html", {resultSQL, fojaSQL});
});


// const sqlQuery = (req) => {
//     const {ssql} = req.body;
//     console.log(ssql);
//     document.ge
//     console.log("hola entro aqui");
// };

module.exports = router;