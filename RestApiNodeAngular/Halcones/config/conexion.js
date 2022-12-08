const mysql = require("mysql");
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodejs_db",
});
conexion.connect((err) => {
  if (err) {
    console.log("ha occuriido un error en la base de datos" + err);
  } else {
    console.log("la base de datos se conecto exitosamente");
  }
});

module.exports = conexion;
