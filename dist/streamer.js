export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.streams = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
    agregarStream(stream) {
        this.streams.push(stream);
    }
    mostrarDetalleStreamer() {
        console.log(`Nombre: ${this.nickname}`);
        console.log(`Logo: ${this.descripcion}`);
        console.log(`Descipción: ${this.redesSociales}`);
    }
}
