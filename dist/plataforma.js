export class Plataforma {
    constructor(nombre, logo, descripcion, empresaPatrocinadora) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresaPatrocinadora = empresaPatrocinadora;
        this.canales = [];
        this.streamers = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
        canal.agregarPlataforma(this);
    }
    agregarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
    }
    agregarStreamer(streamer) {
        this.streamers.push(streamer);
        streamer.agregarPlataforma(this);
    }
    mostrarDetallePlataforma() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.logo}`);
        console.log(`Descipción: ${this.descripcion}`);
        console.log(`Empresa patrocinadora: ${this.empresaPatrocinadora}`);
    }
    listadoCanales() {
        console.log("Listado de canales:");
        this.canales.forEach((canales) => {
            console.log(canales);
        });
    }
    listaStreamers() {
        console.log("Listado de Streamers:");
        this.streamers.forEach((streamers) => {
            console.log(streamers.nickname);
        });
    }
}
