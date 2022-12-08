const routerCate = require("express").Router();
const conexion = require("./config/conexion");

router.get("/categorias", (req, res) => {
  let sql = "SELECT * FROM categorias";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/categorias:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM categorias WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/categorias", (req, res) => {
  const { nombre_cate } = req.body;

  let sql = `INSERT INTO categorias(nombre_cate)
    values('${nombre_cate}'')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "categoria agregada " });
    }
  });
});

//put maquinas
router.put("/categorias:id", (req, res) => {
  const { id } = req.params;
  const { nombre_cate } = req.body;

  let sql = `UPDATE categorias SET
              nombre_cate      ='${nombre_cate}',`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "categoria actualizada " });
    }
  });
});

//eliminar
router.delete("/categorias:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM categorias WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "categoria eliminada " });
    }
  });
});

module.exports = routerCate;
