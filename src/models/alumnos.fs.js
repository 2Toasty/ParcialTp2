import fs from "fs";

class AlumnosModelFs {
  constructor() {
    this.alumnos = "alumnos.json";
  }

  getAlumnos = async () => {
    const data = await fs.promises.readFile(this.alumnos, "utf-8");
    return data;
  };

  getAlumnoById = async (id) => {
    const data = JSON.parse(await fs.promises.readFile(this.alumnos, "utf-8"));
    const alumno = await data.find((alu) => alu.id == id)
    return `¡Hola ${alumno.nombre}! Tu nota es ${alumno.nota}` || "Alumno no encontrado"
}
  

  postAlumnos = async (alumno) => {
  
    const data = JSON.parse(await fs.promises.readFile(this.alumnos, "utf-8"));
    const nuevoAlumno = alumno;
    // Si en este punto el archivo no tiene algo o al menos tiene un [], arroja un error.
        if (data.length > 0) {
            nuevoAlumno.id = data[data.length - 1].id + 1;
        } else {
            nuevoAlumno.id = 1;
        }
    data.push(nuevoAlumno);
    console.log("data: ", data);
    const newData = JSON.stringify(data);
    console.log("newData: ", newData);
    await fs.promises.writeFile(this.alumnos, newData);
    return nuevoAlumno
  };

}
export default AlumnosModelFs;
