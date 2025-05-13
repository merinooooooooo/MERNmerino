import express from "express";
import registerEmpleadosController from "../controllers/registerEmpleadoController.js";
const router = express.Router();

router.route("/").post(registerEmpleadosController.register)

export default router;