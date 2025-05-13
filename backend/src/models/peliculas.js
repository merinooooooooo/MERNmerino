/*
Coleccion: peliculas

campos:
titulo
descripcion
director
genero
anio number
duracion number
imagen
*/

import { Schema, model } from "mongoose";

const PeliculasSchema = new Schema(
    {
      titulo: {
        type: String,
      },
      descripcion:{
        type: String
      },
      director: {
        type: String
      },
      genero: {
        type: String
      },
      anio: {
        type: Number
      },
      duracion: {
        type: Number
      },
      imagen: {
        type: String
      },
    },
    {
        timestamps: true,
        strict: false,
    }
);

export default model ("Peliculas", PeliculasSchema);