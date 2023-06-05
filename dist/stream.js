export class Stream {
    constructor(fecha, duracion, streamer, canal) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.streamer = streamer;
        streamer.agregarStream(this);
        this.canal = canal;
        canal.agregarStream(this);
        this.categorias = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    mostrarDetalleStreame() {
        console.log(`Fecha: ${this.fecha}`);
        console.log(`Duración: ${this.duracion}`);
    }
}
