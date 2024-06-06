class AlumnosModel{
    constructor(){
        this.alumnos = [
            // {
            //     id: 1,
            //     nombre: "Facundo",
            //     nota: 6,
            // },
            // {
            //     id: 2,
            //     nombre: "Juan",
            //     nota: 8,
            // },
            // {
            //     id: 3,
            //     nombre: "Matias",
            //     nota: 10,
            // },
        ];
    }

    getAlumnos = async () =>{
        return this.alumnos;
    };

    postAlumnos = async (data) => {
        const nuevoAlumno = data
        if (this.alumnos.length > 0) {
            nuevoAlumno.id = this.alumnos[this.alumnos.length - 1].id + 1;
        } else {
            nuevoAlumno.id = 1;
        }
        this.alumnos.push(nuevoAlumno);
        return nuevoAlumno
    }

    getAlumnoById = async (id) => {
        const alumno = await this.alumnos.find((alu) => alu.id == id)
        return `¡Hola ${alumno.nombre}! Tu nota es ${alumno.nota}` || "Alumno no encontrado"
    }
    
  
    
}

export default AlumnosModel