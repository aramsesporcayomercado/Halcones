const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query("SELECT * FROM clases", (err, rows) => {
      if (err) return res.send(err);
      res.json(rows);
    });
  });
});
routes.get("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "SELECT * FROM clases where id =?",
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
    conn.query("INSERT INTO clases SET ?", [req.body], (err, rows) => {
      if (err) return res.send(err);

      res.send("las clases fueron guardadas perfectamente");
    });
  });
});

routes.delete("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "DELETE FROM clases where id =?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("las clases fueron eleminados perfectamente");
      }
    );
  });
});

routes.put("/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);
    conn.query(
      "UPDATE clases set ? where id =?",
      [req.body, req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        res.send("las clases fueron actualizadas perfectamente");
      }
    );
  });
});

module.exports = routesClases;
