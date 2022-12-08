const router = require("express").Router();
const conexion = require("./config/conexion");

//assignamos todas las rutas
//get maquinas
router.get("/instructores", (req, res) => {
  let sql = "SELECT * FROM instructores";
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
  let sql = "SELECT * FROM instructores WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/instructores", (req, res) => {
  const { nombre, apellido, password, fec_nac, email, rol, estado } = req.body;

  let sql = `INSERT INTO instructores(nombre, apellido, password, fec_nac,email,rol,estado)
  values('${nombre}','${apellido}','${password}','${fec_nac}','${email}','${rol}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "instructor agregado " });
    }
  });
});

//put maquinas
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, password, fec_nac, email, rol, estado } = req.body;

  let sql = `UPDATE maquinas SET
            nombre      ='${nombre}',
            apellido ='${apellido}',
            password      ='${password}',
            fec_nac    ='${fec_nac}',
            email    ='${email}',
            rol    ='${rol}',
            estado      ='${estado}'
            WHERE id    = '${id}' `;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "instructor actualizado " });
    }
  });
});

//eliminar
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM instructores WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "instructor eliminado " });
    }
  });
});

//fin la asignacion de rutas
module.exports = router;
