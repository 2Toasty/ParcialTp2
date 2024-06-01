class ParcialesModel{
    constructor(){
        this.parciales = [
            {
                id: 1,
                nombre: "Facundo",
                nota: 6,
            },
            {
                id: 2,
                nombre: "Juan",
                nota: 8,
            },
            {
                id: 3,
                nombre: "Matias",
                nota: 10,
            },
        ];
    }

    getParciales = async () =>{
        return this.parciales;
    };

    postParciales = async (data) => {
        const nuevoParcial = await this.parciales.push(data)
        return data
    }
}

export default ParcialesModel