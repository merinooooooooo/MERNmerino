import express from "express";
import clientesController from "../controllers/clientesController.js";
const router = express.Router();

router
   .route("/")
   .get(clientesController.getCliente)
   .post(clientesController.createCliente);

router
   .route("/:id")
   .put(clientesController.updateCliente)
   .delete(clientesController.deleteCliente);

export default router;