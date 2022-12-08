require("./config/conexion");
const express = require("express");
const port = process.env.port || 3000;

//expresss
const app = express();

//admitir
app.use(express.json());

//config
app.set("port", port);

//routes
app.use("/api", require("./routes"));
app.use("/instructores", require("./instructores/routes.instructores"));
app.use("/salones", require("./salones/routesSalones"));
app.use("/clientes", require("./clientes/routesclientes"));
app.use("/productos", require("./productos/routesProductos"));
app.use("/categorias", require("./categorias/routes.categorias"));
app.use("/clases", require("./clases/routesClase"));

//iniciar express
app.listen(app.get("port"), (error) => {
  if (error) {
    console.log("error al iniciar servidor:" + error);
  } else {
    console.log("servidor inicado en el puerto" + port);
  }
});
