import express from "express";
import cookieParser from "cookie-parser";
import peliculasroute from "./src/routes/peliculas.js";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use("/api/peliculas", peliculasroute);

export default app;