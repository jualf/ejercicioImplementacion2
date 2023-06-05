import { Categoria } from "categoria"
import { Canal } from "./canal"
import { Streamer } from "./streamer"

export class Stream {
    fecha: string
    duracion: string

    streamer: Streamer
    canal: Canal
    categorias:Categoria[]


    
    constructor(fecha: string, duracion: string, streamer: Streamer, canal:Canal){
        this.fecha = fecha
        this.duracion = duracion
        this.streamer = streamer
        streamer.agregarStream(this)
        this.canal = canal
        canal.agregarStream(this)
        this.categorias = []

    }

    

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
    }

    mostrarDetalleStreame(){//8. Mostrar el detalle de un stream
        console.log(`Fecha: ${this.fecha}`)
        console.log(`Duración: ${this.duracion}`)
                
    }

    
}