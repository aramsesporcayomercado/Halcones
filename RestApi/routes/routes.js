const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM clientes", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});
routes.get("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM clientes where id =?",
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
    conn.query("INSERT INTO clientes SET ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("el cliente fue guardado perfectamente");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM clientes where id =?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("el cliente fue eleminado perfectamente");
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

        res.send("el cliente fue actualizado perfectamente");
      }
    );
  });
});

module.exports = routes;
