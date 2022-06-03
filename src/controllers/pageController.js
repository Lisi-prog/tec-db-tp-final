const res = require("express/lib/response");
const pool = require("../database");

const vistaPrincipal = (req, res) => {
    res.render("login");
};

const vistaNuevafoja = (req, res) => {
    res.render("nueva-foja");
};

const vistaObra = (req, res) => {
    res.render("obras");
};

const vistaCargarfoja = async (req, res) =>  {
    // const fojaSQL = await pool.query("SELECT * FROM Item WHERE id_obra= 9963");
    // res.render("cargar-foja", {fojaSQL});
    res.render("cargar-foja");
};

const mostrarTabla = async (req, res) => {
    const {sentenciaSQL} = req.body;
    const fojaSQL = null;
    const resultSQL = await pool.query(sentenciaSQL);
    res.render("tables", {resultSQL, fojaSQL});
};

const itemsFoja =  async (req, res) => {
    const {id_obra} = req.body;
    const resultSQL = null;
    const fojaSQL = await pool.query("SELECT * FROM Item WHERE id_obra= ?", [id_obra]);
    res.render("itemFoja", {resultSQL, fojaSQL});
};

module.exports = {
    vistaPrincipal,
    vistaNuevafoja,
    vistaCargarfoja,
    mostrarTabla,
    itemsFoja,
    vistaObra
}