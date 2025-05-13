import empleados from "../models/empleados.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";

const registerEmpleadosController = {};

registerEmpleadosController.register = async(req, res) => {
    const {
        nombre,
        password,
        correo,
        telefono,
        direccion,
        puesto,
        fecha_contratacion,
        salario,
        activo,
    } = req.body;

    try{
        const existEmpleado = await empleados.findOne({correo});
        if (existEmpleado){
            return res.json({message: "Empleado ya existe"})
        }

        const passwordHash = await bcryptjs.hash(password,10);

        const newEmpleado = new empleados({
        nombre,
        password,
        correo,
        telefono,
        direccion,
        puesto,
        fecha_contratacion,
        salario,
        activo,
        });
        
        await newEmpleado.save();

        jsonwebtoken.sign(

            {id: newEmpleado._id},

            config.JWT.secret,

            {expiresIn: config.JWT.expiresIn},

            (error, token) => {
                if(error) console.log(error);
                res.cookie("authToken", token);
                res.json({message: "Empleado registrado"})
            }
        );
    }catch(error){
        console.log(error);
    }
};

export default registerEmpleadosController;