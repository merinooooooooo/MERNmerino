const empleadoController = {};
import empleadoModel from "../models/empleados.js"

empleadoController.getEmpleado = async (req, res) => {
    const empleado = new empleadoModel.find();
    res.json(empleado);
};

empleadoController.createEmpleado = async(req,res) => {
    const {nombre,password,correo, telefono, direccion,puesto, fecha_contratacion,  salario, activo} = req.body;
    const newempleado = new empleadoModel({nombre,password,correo, telefono, direccion,puesto, fecha_contratacion,  salario, activo});
    await newempleado.save();
    res.json({message: "empleado save"});
}

empleadoController.deleteEmpleado = async(req,res) => {
    const deleteEmpleado = await empleadoModel.findByIdAndDelete(req.params.id);
    if (!deleteEmpleado){
        return res.status(404).json({message : "empleado dont find"});
    }
    res.json({message: "empleado deleted"});
};

empleadoController.updateEmpleado = async (req,res) => {

    const{ nombre,password,correo, telefono, direccion,puesto, fecha_contratacion,  salario, activo} = req.body;

    await empleadoModel.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            password,
            correo,
            telefono,
            direccion,
            puesto,
            fecha_contratacion,
            salario,
            activo
        },
        { new: true}
    );
   
    res.json ({message: "empleado update"});
};

export default empleadoController;