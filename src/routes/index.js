const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { redirect, append, render } = require("express/lib/response");

const pool = require("../database");
const customerController = require("../controllers/customController");
// const passport = require("passport");
const {vistaPrincipal, vistaNuevafoja, vistaCargarfoja, mostrarTabla, itemsFoja, vistaObra, vistaCertiPago, vistaCertiObra, vistaMontoObra, vistaAvanceObra} = require("../controllers/pageController");
const router = express.Router();

router.get("/", vistaPrincipal);

router.get("/nuevaFoja", vistaNuevafoja);

router.get("/cargarFoja", vistaCargarfoja);

router.post("/sql", mostrarTabla);

router.post("/newFoja", itemsFoja);

router.get("/obras", vistaObra);

router.get("/certiPago", vistaCertiPago);

router.get("/certiObra", vistaCertiObra);

router.get("/montoObra", vistaMontoObra);

router.get("/avanceObra", vistaAvanceObra);


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

//Mostrar avance de obras
router.get("/api/avanceObra", (req, res) => {
    pool.query("SELECT id_obra, NOM_OBRA, Avance_obra_porcentaje(id_obra) AS avance FROM Obra;", (err, rows) => {
        if(err){
            throw(err);
        }else{
            res.send(rows);
        }
    });
});

//nueva foja
router.get("/api/nuevaFoja", (req, res) => {
    pool.query("SELECT id_obra, NOM_OBRA, Avance_obra_porcentaje(id_obra) AS avance FROM Obra;", (err, rows) => {
        if(err){
            throw(err);
        }else{
            res.send(rows);
        }
    });
});

//Mostrar obras
router.get("/api/foja/:id_obra", (req, res) => {
    pool.query("select o.nom_obra, i.den_item, f.id_foja, DATE_FORMAT( f.fecha_foja,  '%d-%m-%Y' ) as fecha, fd.id_item , fd.ava_acu_ant , fd.ava_actual  from Foja as f inner join Foja_det as fd inner join Obra as o inner join Item as i where f.id_obra = ? and f.id_foja = fd.id_foja and o.id_obra = ? and fd.id_item = i.id_item and i.id_obra = ?;",[req.params.id_obra, req.params.id_obra, req.params.id_obra] , (err, row) => {
        if(err){
            throw err;
        }else{
            res.send(row);
        }
    });
});

module.exports = router;