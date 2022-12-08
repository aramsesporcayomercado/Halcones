const routerClase = require("express").Router();
const conexion = require("./config/conexion");

//assignamos todas las rutas
//get maquinas
router.get("/clases", (req, res) => {
  let sql = "SELECT * FROM clases";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/clases:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM clases WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/clases", (req, res) => {
  const { nombre, salon, nombre_instructor, horario, estado } = req.body;

  let sql = `INSERT INTO clases(nombre, salon, nombre_instructor, horario, estado)
  values('${nombre}','${salon}','${nombre_instructor}','${horario}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "clase agregada " });
    }
  });
});

//put maquinas
router.put("/clases:id", (req, res) => {
  const { id } = req.params;
  const { nombre, salon, nombre_instructor, horario, estado } = req.body;

  let sql = `UPDATE clases SET
            nombre      ='${nombre}',
            salon       ='${salon}',
            nombre_instructor       ='${nombre_instructor}',
            horario    ='${horario}',
            estado      ='${estado}'
            WHERE id    = '${id}' `;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "clase actualizada " });
    }
  });
});

//eliminar
router.delete("/clases:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM clases WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "clase eliminada " });
    }
  });
});

//fin la asignacion de rutas
module.exports = routerClase;
