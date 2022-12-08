router.get("/salones", (req, res) => {
  let sql = "SELECT * FROM salones";
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});

//get un  maquina por id
router.get("/salones:id", (req, res) => {
  const { id } = req.params;
  let sql = "SELECT * FROM salones WHERE id =?";
  conexion.query(sql, [id], (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json(rows);
    }
  });
});
//post maquina
router.post("/salones", (req, res) => {
  const { nombre, nombre_clase, nombre_instructor, horario, estado } = req.body;

  let sql = `INSERT INTO salones(nombre, nombre_clase, nombre_instructor, horario, estado)
    values('${nombre}','${nombre_clase}','${nombre_instructor}','${horario}','${estado}')`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "salon agregado " });
    }
  });
});

//put maquinas
router.put("/salones:id", (req, res) => {
  const { id } = req.params;
  const { nombre, nombre_clase, nombre_instructor, horario, estado } = req.body;

  let sql = `UPDATE salones SET
              nombre            ='${nombre}',
              nombre_clase      ='${nombre_clase}',
              nombre_instructor ='${nombre_instructor}',
              horario    ='${horario}',
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
router.delete("/salones:id", (req, res) => {
  const { id } = req.params;
  let sql = `DELETE FROM salones WHERE id ='${id}'`;
  conexion.query(sql, (err, rows, fields) => {
    if (err) throw err;
    else {
      res.json({ status: "salon eliminado " });
    }
  });
});
