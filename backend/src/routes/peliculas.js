import express from "express";
import multer from "multer";
import Peliculas from "../controllers/peliculasController.js";

const router = express.Router();

const upload = multer({dest: "public/"})

router
  .route("/")
  .get(Peliculas.getAllPeliculas)
  .post(upload.single("imagen"), Peliculas.createPeliculas);

export default router;