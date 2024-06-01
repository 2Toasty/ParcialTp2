import express from 'express'
// import controller from '../controllers/parciales.controller.js' mal, esto sirve para 
import ParcialesController from '../controllers/parciales.controller.js';

class Router{
    constructor(){
        this.router = express.Router();
        this.controller = new ParcialesController()
    }

    start(){
        this.router.get("/parciales", this.controller.getParciales)
        this.router.post("/parciales", this.controller.postParciales)

        return this.router;
    }
}

export default Router;