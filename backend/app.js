import express from "express";
import cookieParser from "cookie-parser";
import peliculasroute from "./src/routes/peliculas.js";
import registerEmpleadoRoute from "./src/routes/registerEmpleado.js"
import empleadoRoute from "./src/routes/empleados.js";
import registerClientesRoute from "./src/routes/registerClientes.js"
import clientesRoute from "./src/routes/clientes.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/peliculas", peliculasroute);
app.use("/api/registerEmpleado", registerEmpleadoRoute);
app.use("/api/empleados", empleadoRoute);
app.use("/api/registerClientes", registerClientesRoute);
app.use("/api/clientes", clientesRoute);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);


export default app;