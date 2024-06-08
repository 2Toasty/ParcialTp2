import AlumnosModelFs from "./alumnos.fs.js";
import AlumnosModel from "./alumnos.models.js";

class ModelFactory{

    static get(type){
    
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new AlumnosModel();
            case 'FS':
                console.log('Persistiendo en la memoria de Filesystem!')
                return new AlumnosModelFs();
            default:
                console.log('Persistiendo en la memoria default!')
                return new AlumnosModel();
                break;
        }
    }

}

export default ModelFactory