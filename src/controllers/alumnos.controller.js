import AlumnosServices from "../services/alumnos.services.js";

class AlumnosController{
    constructor(){
        this.services = new AlumnosServices();
    }

    getAlumnos = async (req,res) => {
        const alumnos = await this.services.getAlumnos();
        res.send(alumnos);
    }

    postAlumnos = async (req,res) => {
        const nuevoAlumno = req.body
        const alumnos = await this.services.postAlumnos(nuevoAlumno)
        res.send(alumnos)
    }

    getAlumnoById = async (req,res) => {
        const {id} = req.params
    try {
        
        const alumno = await this.services.getAlumnoById(id)
        res.send(alumno)
      
    } catch (error) {
      res.send(`El alumno con ID: ${id}, no existe.`)  
    }            
    }

    
}

export default AlumnosController