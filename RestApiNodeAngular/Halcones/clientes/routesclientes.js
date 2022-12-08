const routerCliente = require("express").Router();
const conexion = require("./config/conexion");

//assignamos todas las rutas
//get maquinas
router.get("/clientes", (req, res) => {
  let sql = "SELECT * FROM clientes";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/clientes:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM clientes WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/clientes", (req, res) => {
  const {
    nombre,
    apellido,
    password,
    fec_nac,
    genero,
    tipo_membresia,
    email,
    rol,
    estado,
  } = req.body;

  let sql = `INSERT INTO clientes(nombre, apellido, password, fec_nac,genero,tipo_membresia,email,rol,estado)
  values('${nombre}','${apellido}','${password}','${fec_nac}','${genero}','${tipo_membresia}','${email}','${rol}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "cliente agregado " });
    }
  });
});

//put maquinas
router.put("/clientes:id", (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    apellido,
    password,
    fec_nac,
    genero,
    tipo_membresia,
    email,
    rol,
    estado,
  } = req.body;

  let sql = `UPDATE clientes SET
            nombre      ='${nombre}',
            apellido ='${apellido}',
            password       ='${password}',
            fec_nac    ='${fec_nac}',
            genero    ='${genero}',
            tipo_membresia    ='${tipo_membresia}',
            email   ='${email}',
            rol    ='${rol}',
            estado      ='${estado}'
            WHERE id    = '${id}' `;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "cliente actualizado " });
    }
  });
});

//eliminar
router.delete("/clientes:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM cliente WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "cliente eliminada " });
    }
  });
});

//fin la asignacion de rutas
module.exports = routerCliente;
