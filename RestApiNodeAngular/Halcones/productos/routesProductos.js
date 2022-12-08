const routerProduct = require("express").Router();
const conexion = require("./config/conexion");

//assignamos todas las rutas
//get maquinas
router.get("/productos", (req, res) => {
  let sql = "SELECT * FROM productos";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/productos:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM productos WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/productos", (req, res) => {
  const { nombre, marca, precio, cantidad, num_serie, garantia, tipo, estado } =
    req.body;

  let sql = `INSERT INTO productos p (nombre, marca,precio ,cantidad,num_serie,garantia,tipo ,estado) INNER JOIN categorias g ON p.id_cate, g.id
  values('${nombre}','${marca}','${precio}','${cantidad}','${num_serie}','${garantia}','${tipo}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "producto agregado " });
    }
  });
});

//put maquinas
router.put("/productos:id", (req, res) => {
  const { id } = req.params;
  const { nombre, marca, precio, cantidad, num_serie, garantia, tipo, estado } =
    req.body;

  let sql = `UPDATE productos SET
            nombre      ='${nombre}',
            marca       ='${marca}',
            precio ='${precio}',
            cantidad ='${cantidad}',
            num_serie ='${num_serie}',
            garantia    ='${garantia}',
            tipo  ='${tipo}',
            estado      ='${estado}'
            INNER JOIN categorias g ON p.id_cate, g.id
            WHERE id    = '${id}' `;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "productos actualizada " });
    }
  });
});

//eliminar
router.delete("/productos:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM productos WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "productos eliminada " });
    }
  });
});

//fin la asignacion de rutas
module.exports = routerProduct;
