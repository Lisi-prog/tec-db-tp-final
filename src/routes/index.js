const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");

const pool = require("../database");
const customerController = require("../controllers/customController");
// const passport = require("passport");
const {vistaPrincipal, vistaNuevafoja, vistaCargarfoja, mostrarTabla, itemsFoja, vistaObra} = require("../controllers/pageController");
const router = express.Router();

router.get("/", vistaPrincipal);

router.get("/nuevaFoja", vistaNuevafoja);

router.get("/cargarFoja", vistaCargarfoja);

router.post("/sql", mostrarTabla);

router.post("/newFoja", itemsFoja);

router.get("/obras", vistaObra);


// const sqlQuery = (req) => {
//     const {ssql} = req.body;
//     console.log(ssql);
//     document.ge
//     console.log("hola entro aqui");
// };

//Mostrar obras
router.get("/api/obras", (req, res) => {
    pool.query("SELECT * FROM Obra;", (err, rows) => {
        if(err){
            throw err;
        }else{
            res.send(rows);
        }
    });
});

//Mostrar obras
router.get("/api/obrasEmpresa", (req, res) => {
    pool.query("SELECT o.id_obra, o.nom_obra, o.plazo_mes, e.razon_social FROM Obra AS o inner join Empresa AS e WHERE o.id_empresa = e.id_empresa;", (err, rows) => {
        if(err){
            throw err;
        }else{
            res.send(rows);
        }
    });
});

//Mostrar obras
router.get("/api/obras/:id_obra", (req, res) => {
    pool.query("SELECT * FROM Obra WHERE id_obra = ?;",[req.params.id_obra] , (err, row) => {
        if(err){
            throw err;
        }else{
            res.send(row);
        }
    });
});
module.exports = router;