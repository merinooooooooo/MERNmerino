const clientesController = {};
import clientesModel from "../models/clientes.js"

clientesController.getCliente = async (req, res) => {
    const clientes = new clientesModel.find();
    res.json (clientes);
};

clientesController.createCliente = async (req, res) => {
    const{nombre,password,correo,telefono,direccion,activo} = req.body;
const newCliente = new clientesModel({nombre,password,correo,telefono,direccion,activo});
await newCliente.save();
res.json ({message: "cliente save"});
}

clientesController.deleteCliente = async(req,res) => {
    const deleteCliente = await clientesModel.findByIdAndDelete(req.params.id);
    if (!deleteCliente){
        return res.status(404).json({message: "cliente dont find"});
    
    }
    res.json ({message: "cliente deleted"});
};

clientesController.updateCliente = async (req,res) => {

    const{ nombre,password,correo,telefono,direccion,activo} = req.body;

    await clientesModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            password,
            correo,
            telefono,
            direccion,
            activo,
        },
        { new: true}
    );
   
    res.json ({message: "cliente update"});
};

export default clientesController;