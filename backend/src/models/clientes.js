/*\

Clientes:

nombre
correo
telefono
direccion 
activo

*/
import { Schema, model} from 'mongoose';

const clientesSchema = new Schema(
    {
        nombre:{
            type: String,
        },
        password:{
            type: String,
        },
        correo:{
            type: String,
        },
        telefono: {
            type: Number,
        },
        direccion:{
            type: String,
        },
        activo:{
            type: Boolean,
        },
    },
    {
        timestamps: true,
        strict:false,
    }
);

export default model ("clientes", clientesSchema);
