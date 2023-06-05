export class Canal {
    constructor(nombre, banner, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.streams = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    mostrarDetalleCanal() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.banner}`);
        console.log(`Descipción: ${this.descripcion}`);
    }
    listadoStreams() {
        console.log("Listado de streams:");
        this.streams.forEach((streams) => {
            console.log(streams);
        });
    }
}
