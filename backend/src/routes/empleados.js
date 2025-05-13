import express from "express";
import empleadoController from "../controllers/empleadosController.js";

const router = express.Router();

router
   .route("/")
   .get(empleadoController.getEmpleado)
   .post(empleadoController.createEmpleado);

router
   .route("/:id")
   .put(empleadoController.updateEmpleado)
   .delete(empleadoController.deleteEmpleado);

export default router;