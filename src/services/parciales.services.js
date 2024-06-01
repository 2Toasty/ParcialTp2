import ParcialesModel from "../models/parciales.models.js"
import model from "../models/parciales.models.js"

class ParcialesServices{
    constructor(){
        this.model = new ParcialesModel();
    }

    getParciales = async () => {
        const parciales = await this.model.getParciales();
        return parciales;
    }

    postParciales = async (data) => {
        const parciales = await this.model.postParciales(data);
        return parciales;
    }
}

export default ParcialesServices;