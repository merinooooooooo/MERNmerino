import express from "express";
import cookieParser from "cookie-parser";
import peliculasroute from "./src/routes/peliculas.js";
import registerEmpleadoRoute from "./src/routes/registerEmpleado.js"
import empleadoRoute from "./src/routes/empleados.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/peliculas", peliculasroute);
app.use("/api/registerEmpleado", registerEmpleadoRoute);
app.use("/api/empleados", empleadoRoute);


export default app;