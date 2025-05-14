import clientes from "../models/clientes.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js";

const registerClientesController = {};

registerClientesController.register = async(req, res) => {
    const {
        nombre,
        password,
        correo,
        telefono,
        direccion,
        activo,
    } = req.body;
   
    try{
        const existCliente = await clientes.findOne({correo})
        if (existCliente){
            return res.json({message: "Cliente exist"})
        }

        const passwordHash = await bcryptjs.hash(password,10);

        const newCliente = new clientes({
            nombre,
            password,
            correo,
            telefono,
            direccion,
            activo,
        });

        await newCliente.save();

        jsonwebtoken.sign(
            {id: newCliente._id},

            config.JWT.secret,
            {expiresIn: config.JWT.expiresIn},

            (error, token) => {
                if(error) console.log(error);
                res.cookie("authToken", token);
                res.json({message: "Cliente registrado"})
            }
        );
    }catch(error){
        console.log(error);
    }
};

export default registerClientesController;