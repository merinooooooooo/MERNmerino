import express from "express";
import registerClientesController from "../controllers/registerClientes.js";
const router = express.Router();

router.route("/").post(registerClientesController.register)

export default router;