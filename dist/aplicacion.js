export class Aplicacion {
    constructor() {
        this.plataformas = [];
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    listadoPlataformas() {
        console.log("Listado de plataformas:");
        this.plataformas.forEach((plataformas) => {
            console.log(plataformas);
        });
    }
}
