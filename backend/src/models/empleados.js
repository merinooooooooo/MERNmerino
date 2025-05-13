/*
Coleccion: empleados

campos:
nombre
correo
telefono
direccion
puesto
fecha_contratacion
salario
activo
*/

import { Schema, model } from "mongoose";

const empleadoSchema = new Schema(
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
    telefono:{
        type: Number,
    },
    direccion:{
        type: String,
    },
    puesto: {
        type: String,
    },
    fecha_contratacion:{
        type: String,
    },
    salario:{
        type: Number,

    },
    activo:{
        type:String,

    },
   },

   {
    timestamps: true,
    strict: false,
   }


);

export default model("empleadoSchema", empleadoSchema);