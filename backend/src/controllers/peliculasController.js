import peliculasModel from "../models/peliculas.js";
import { v2 as cloudinary } from "cloudinary";

import { config } from "../config.js";

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});

const PeliculasController = {};

//Select
PeliculasController.getAllPeliculas = async (req,res) => {
    const peliculas = await peliculasModel.find();
    res.json(peliculas);
};

//Guardar
PeliculasController.createPeliculas = async( req, res) => {
    try{
        const {titulo, descripcion, director, genero, anio, duracion} = req.body;
        let imageUrl = "";

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path,{
                folder: "public",
                allowed_formats: [ "jpg", "png", "jpeg"],
            });
            imageUrl = result.secure_url;
        }

        const Peliculas = new peliculasModel({titulo, descripcion, director, genero, anio, duracion, imagen: imageUrl});
        Peliculas.save();
           
        res.json({message: "Imagen subida"});
     } catch(error) {
        console.log("error" + error);
     }

};

PeliculasController.uploadPeliculas = async( req, res) => {
    try{
        const {titulo, descripcion, director, genero, anio, duracion} = req.body;
        let imageUrl = "";

        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path,
            {
                folder: "public",
                allowed_formats: [ "jpg", "png", "jpeg"],
            });
            imageUrl = result.secure_url;
        }

        await peliculasModel.findByIdAndUpdate(req.params.id,
            {
                titulo, descripcion, director, genero, anio, duracion, imagen: imageUrl  
            }, {new: true}
        )

        res.json({message: "Actualizado"});
    }catch(error){
        console.log("error" + error);
    }
}

export default PeliculasController;

