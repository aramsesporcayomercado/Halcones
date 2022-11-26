const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM maquinas", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});
routes.get("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM maquinas where id =?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);
        res.json(rows);
      }
    );
  });
});

routes.post("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("INSERT INTO maquinas SET ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("la maquina fue guardado perfectamente");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM maquinas where id =?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("la maquina fue eleminado perfectamente");
      }
    );
  });
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE clientes set ? where id =?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("la maquina fue actualizado perfectamente");
      }
    );
  });
});

module.exports = routesMaquinas;
