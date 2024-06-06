import express from 'express'
import AlumnosController from '../controllers/alumnos.controller.js';

class Router{
    constructor(){
        this.router = express.Router();
        this.controller = new AlumnosController()
    }

    start(){
        this.router.post("/alumnos", this.controller.postAlumnos)
        this.router.get("/alumnos", this.controller.getAlumnos)
        this.router.get("/alumnos/:id",this.controller.getAlumnoById)
        
        return this.router;
    }
}

export default Router;