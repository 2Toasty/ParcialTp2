import ParcialesServices from "../services/parciales.services.js";

class ParcialesController{
    constructor(){
        this.services = new ParcialesServices();
    }

    getParciales = async (req,res) => {
        const parciales = await this.services.getParciales();
        res.send(parciales);
    }

    postParciales = async (req,res) => {
        const nuevoParcial = req.body
        const parciales = await this.services.postParciales(nuevoParcial)
        res.send(parciales)
    }
}

export default ParcialesController