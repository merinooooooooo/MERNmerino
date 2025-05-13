import express from "express";
import multer from "multer";
import PeliculasController from "../controllers/peliculasController.js";
;

const router = express.Router();

const upload = multer({dest: "public/"})

router
  .route("/")
  .get(PeliculasController.getAllPeliculas)
  .post(upload.single("imagen"), PeliculasController.createPeliculas);
  
router
.route("/:id")
.put(PeliculasController.uploadPeliculas);

export default router;