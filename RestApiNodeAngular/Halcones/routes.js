const router = require("express").Router();
const conexion = require("./config/conexion");

//assignamos todas las rutas
//get maquinas
router.get("/", (req, res) => {
  let sql = "SELECT * FROM maquinas";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM maquinas WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/", (req, res) => {
  const { nombre, descripcion, marca, garantia, estado } = req.body;

  let sql = `INSERT INTO maquinas(nombre, descripcion, marca, garantia, estado)
  values('${nombre}','${descripcion}','${marca}','${garantia}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "maquina agregada " });
    }
  });
});

//put maquinas
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, marca, garantia, estado } = req.body;

  let sql = `UPDATE maquinas SET
            nombre      ='${nombre}',
            descripcion ='${descripcion}',
            marca       ='${marca}',
            garantia    ='${garantia}',
            estado      ='${estado}'
            WHERE id    = '${id}' `;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "maquina actualizada " });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM maquinas WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "maquina eliminada " });
    }
  });
});

//fin la asignacion de rutas
module.exports = router;
