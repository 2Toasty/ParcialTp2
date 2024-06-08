// import AlumnosModel from "../models/alumnos.models.js"
import ModelFactory from "../models/Factory.js";
import config from "../../config.js"

class AlumnosServices{
    constructor(){
        // this.model = new AlumnosModel();
        this.model = ModelFactory.get(config.PERSISTENCE);
    }

    getAlumnos = async () => {
        const alumnos = await this.model.getAlumnos();
        return alumnos;
    }

    postAlumnos = async (data) => {
        const alumnos = await this.model.postAlumnos(data);
        return alumnos;
    }

    getAlumnoById = async (id) => {
        const alumno = await this.model.getAlumnoById(id)
        return alumno
    }

    
}

export default AlumnosServices;