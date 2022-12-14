const express = require("express");
const mysql = require("mysql");
const myconn = require("express-myconnection");

const routes = require("./routes/routes");
const app = express();

app.set("port", process.env.PORT || 9000);
const dbOptions = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "nodejs_db",
};

//middelware
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.setEncoding("hola funciona ");
});

app.use("/api", routes);
//app.use("/instructores", routesInstructores);

// server running
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
