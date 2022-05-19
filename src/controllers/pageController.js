const res = require("express/lib/response");
const pool = require("../database");

const vistaPrincipal = (req, res) => {
    res.render("login");
};

const vistaNuevafoja = (req, res) => {
    res.render("nueva-foja");
};

const vistaCargarfoja = async (req, res) =>  {
    // const fojaSQL = await pool.query("SELECT * FROM Item WHERE id_obra= 9963");
    // res.render("cargar-foja", {fojaSQL});
    res.render("cargar-foja");
};

module.exports = {
    vistaPrincipal,
    vistaNuevafoja,
    vistaCargarfoja
}